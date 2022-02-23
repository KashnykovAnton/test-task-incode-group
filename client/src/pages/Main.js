import styles from "./Main.module.css";
import List from "../components/List/List";

export default function MainPage() {
  return (
    <div className={styles.container}>
      <List />
    </div>
  );
}
