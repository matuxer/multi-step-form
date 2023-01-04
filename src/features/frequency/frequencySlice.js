import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "monthly"
};

export const frequencySlice = createSlice({
  name: "frequency",
  initialState,
  reducers: {
    freqSwitch: (state) => {
      if (state.value === "monthly") {
        state.value = "yearly"
      } else {
        state.value = "monthly"
      }
    }
  }
});

export const { freqSwitch } = frequencySlice.actions;

export default frequencySlice.reducer;