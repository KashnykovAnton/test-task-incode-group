import { createReducer } from "@reduxjs/toolkit";
import { getTickers } from "./tickers-actions";

export const tickersReducer = createReducer([], {
  [getTickers]: (_, { payload }) => payload,
});
