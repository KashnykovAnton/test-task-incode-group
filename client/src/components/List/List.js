import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./List.module.css";
import { getTickersData } from "../../redux/tickers/tickers-operations";
import { selectTickers } from "../../redux/tickers/tickers-selectors";

export default function List() {
  const tickersList = useSelector(selectTickers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickersData());
  }, [dispatch]);

  // last_trade_time: "2022-02-22T23:02:26.000Z"

  return (
    <ul className={styles.list}>
      {tickersList.map((item) => {
        console.log(item);
        return (
          <li className={styles.listItem}>
            <p>{item.exchange}</p>
            <p>{item.ticker}</p>
            <p>{item.price}</p>
            <p>{item.change}</p>
            <p>{item.change_percent}</p>
            <p>{item.yield}</p>
            <p>{item.dividend}</p>
            <p>{item.last_trade_time}</p>
          </li>
        );
      })}
    </ul>
  );
}
