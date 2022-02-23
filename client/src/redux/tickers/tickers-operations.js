import { io } from "socket.io-client";
import { getTickers } from "./tickers-actions";

const socket = io.connect("http://localhost:4000");

export const getTickersData = () => (dispatch) => {
  dispatch(getTickers());
  try {
    socket.emit("start").on("ticker", (data) => {
      dispatch(getTickers(data));
    });
  } catch (error) {
    dispatch(getTickers(error));
  }
};
