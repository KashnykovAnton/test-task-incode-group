// import { io } from "socket.io-client";
// import { useState, useEffect } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickersData } from "../redux/tickers/tickers-operations";
import { selectTickers } from "../redux/tickers/tickers-selectors";

export default function List() {
  const tickersList = useSelector(selectTickers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickersData());
  }, [dispatch]);

  console.log(tickersList);
  //   const [state, setState] = useState([]);

  //   const socket = io.connect("http://localhost:4000");

  //   socket.emit("start");
  //   socket.on("ticker", (quotes) => {
  //     setState(quotes);
  //   });

  //   useEffect(() => {
  //     console.log(state);
  //   }, state);

  //   console.log(state);

  return (
    <>
      <p>Hello World</p>
      {tickersList.map((item) => {
        console.log(item);
        return (
          <li>
            <p>{item.ticker}</p>
            <p>{item.change}</p>
            <p>{item.dividend}</p>
          </li>
        );
      })}
    </>
  );
}
