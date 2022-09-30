import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carPrice: 1000000,
  anInitialFee: 200000,
  leasePeriod: 10,
  totalSum: 0,
  monthPayment: 0,
}

export const leasingSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const selectLeasing = (state) => state.leasing;

export const { increment, decrement, incrementByAmount } = leasingSlice.actions

export default leasingSlice.reducer