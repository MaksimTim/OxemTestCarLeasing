import { configureStore } from "@reduxjs/toolkit";
import leasingReducer from "./slices/leasingSlice";
import { leasingApi } from "./api/leasingApi";

export const store = configureStore({
  reducer: {
    leasing: leasingReducer,
    [leasingApi.reducerPath]: leasingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(leasingApi.middleware),
});
