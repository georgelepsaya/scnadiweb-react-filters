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
  },
});

export const { updateParams } = setFiltersSlice.actions;

export default setFiltersSlice.reducer;
