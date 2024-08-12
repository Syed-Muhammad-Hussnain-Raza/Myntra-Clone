import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "item",
  initialState: [],
  reducers: {
    addInitialItems: (action) => {
      return action.payload;
    },
  },
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;
