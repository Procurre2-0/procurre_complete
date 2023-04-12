import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterSidebar: true,
};

export const FilterSlice = createSlice({
  name: "filterSidebar",
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      state.filterSidebar = !state.filterSidebar;
    },
  },
});

export const { toggleSidebar } = FilterSlice.actions;

export default FilterSlice.reducer;
