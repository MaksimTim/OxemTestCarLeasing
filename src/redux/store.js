import { configureStore } from "@reduxjs/toolkit";
import leasingReducer from "./slices/leasingSlice";

export const store = configureStore({
  reducer: {
    leasing: leasingReducer,
  },
});
