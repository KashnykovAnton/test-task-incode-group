import { io } from "socket.io-client";
import { useState, useEffect } from "react";

export default function List() {
  const [state, setState] = useState([]);

  const socket = io.connect("http://localhost:4000");

  socket.emit("start");
  socket.on("ticker", (quotes) => {
    setState(quotes);
  });

  //   useEffect(() => {
  //     console.log(state);
  //   }, state);

  //   console.log(state);

  return (
    <>
      <p>Hello World</p>
      {state.map((item) => {
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
