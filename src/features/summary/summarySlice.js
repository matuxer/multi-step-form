import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    plan: {
      name: "",
      price: 0
    },
    addons: []
  }
};

const addonSorter = (arr) => {
  return arr.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  });
}

export const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    selectPlan: (state, action) => {
      state.value.plan.name = action.payload.name;
      state.value.plan.price = action.payload.price;
    },
    selectAddons: (state, action) => {
      state.value.addons = addonSorter(action.payload)
    }
  }
});

export const { selectPlan, selectAddons } = summarySlice.actions;

export default summarySlice.reducer;