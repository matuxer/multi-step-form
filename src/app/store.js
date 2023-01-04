import { configureStore } from "@reduxjs/toolkit";
import frequencySlice from "../features/frequency/frequencySlice";
import summarySlice from "../features/summary/summarySlice";

export const store = configureStore({
  reducer: {
    frequency: frequencySlice,
    summary: summarySlice
  },
})