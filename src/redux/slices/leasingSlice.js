import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carPrice: 1000000,
  percentage: 10,
  anInitialFee: 0,
  leasePeriod: 1,
  totalSum: 0,
  monthPayment: 0,
};

export const leasingSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCarPrice: (state, { payload }) => {
      state.carPrice = payload;
      state.anInitialFee = Math.ceil((state.carPrice * state.percentage) / 100);
    },
    setPercentage: (state, { payload }) => {
      state.percentage = payload;
    },
    setInitialFee: (state) => {
      state.anInitialFee = Math.ceil((state.carPrice * state.percentage) / 100);
    },
    setLeasePeriod: (state, { payload }) => {
      state.leasePeriod = payload;
    },
    setTotalSum: (state) => {
      state.totalSum = state.anInitialFee + state.leasePeriod * state.monthPayment;
    },
    setMonthPayment: (state) => {
      state.monthPayment = Math.ceil((state.carPrice - state.anInitialFee) *
        ((0.035 * Math.pow(1 + 0.035, state.leasePeriod)) /
          (Math.pow(1 + 0.035, state.leasePeriod) - 1)))
        ;
    },
  },
});

export const selectLeasing = (state) => state.leasing;

export const { setCarPrice, setPercentage, setInitialFee, setLeasePeriod, setTotalSum, setMonthPayment } =
  leasingSlice.actions;

export default leasingSlice.reducer;
