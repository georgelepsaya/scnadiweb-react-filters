import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paramsObj: {},
};

const setFiltersSlice = createSlice({
  name: "setFilters",
  initialState,
  reducers: {
    updateParams: (state, action) => {
      state.paramsObj = { ...state.paramsObj, ...action.payload };
    },
    clearParams: (state, action) => {
      state.paramsObj = {};
    },
  },
});

export const { updateParams, clearParams } = setFiltersSlice.actions;

export default setFiltersSlice.reducer;
