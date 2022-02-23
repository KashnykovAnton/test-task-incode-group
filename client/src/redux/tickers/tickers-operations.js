import { io } from "socket.io-client";
import { getTickers } from "./tickers-actions";

const socket = io("ws://localhost:4000", {
  query: {
    // default fetch interval for socket.io (ms)
    interval: 5000,
    // default tickers
    tickers: ["AAPL", "GOOGL", "MSFT", "AMZN", "FB", "TSLA"],
  },
});

// const socket = io.connect("http://localhost:4000");

// socket.emit("start");
// socket.on("ticker", (quotes) => {
//   setState(quotes);
// });

export const getTickersData = () => (dispatch) => {
  dispatch(getTickers());
  try {
    socket.emit("start").on("ticker", (data) => {
      dispatch(getTickers(data));
      //   if (data.length === 0) {
      //     return socket.disconnect();
      //   }
    });
  } catch (error) {
    dispatch(getTickers(error));
  }
};

// export default getTickersData;
