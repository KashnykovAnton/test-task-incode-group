import { createReducer } from "@reduxjs/toolkit";
import { getTickers } from "./tickers-actions";

const tickersReducer = createReducer([], {
  [getTickers]: (_, action) => action.payload,
  //   [getTickers]: (state, { payload }) => [...state, payload],
});

export default tickersReducer;
