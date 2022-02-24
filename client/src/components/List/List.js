import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import styles from "./List.module.css";
import { getTickersData } from "../../redux/tickers/tickers-operations";
import { selectTickers } from "../../redux/tickers/tickers-selectors";

export default function List() {
  const tickersList = useSelector(selectTickers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTickersData());
  }, [dispatch]);

  return (
    <>
      {tickersList.length !== 0 && (
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{tickersList[0].exchange}</h2>
          <p className={styles.data}>
            {new Date(
              tickersList[0].last_trade_time.slice(0, 19) + "Z"
            ).toString()}
          </p>
          <table>
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Price</th>
                <th>Change</th>
                <th>Change percent</th>
                <th>Yield</th>
                <th>Dividend</th>
              </tr>
            </thead>
            {tickersList.map((item) => {
              const change = Number(item.price) - Number(item.change) > 0;
              return (
                <tbody key={uuidv4()}>
                  <tr>
                    <td>{item.ticker}</td>
                    <td>{item.price} $</td>
                    <td
                      className={`${
                        change ? styles.greenItem : styles.redItem
                      }`}
                    >
                      {item.change} $
                    </td>
                    <td>{item.change_percent} %</td>
                    <td>{item.yield} %</td>
                    <td>{item.dividend} $</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      )}
    </>
  );
}
