import { configureStore } from "@reduxjs/toolkit";
import tickersReducer from "./tickers/tickers-reducer";

export const store = configureStore({
  reducer: {
    tickers: tickersReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});
