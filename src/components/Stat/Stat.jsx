import styles from "./Stat.module.scss";
import CountStat from "../../utils/CountStat";
import { useSelector } from "react-redux";

function Stat() {
  const todoList = useSelector((state) => state.todo.todoList);

  const pendingList = todoList.filter((item) => item.status === "Pending");
  const completedList = todoList.filter((item) => item.status === "Completed");

  let countAll = CountStat(todoList, true);
  let countPending = CountStat(pendingList, "countPending");
  let countCompleted = CountStat(completedList, "countCompleted");

  return (
    <>
      <div className={styles.all}>
        <p className={styles.title}>All</p>
        <div className={styles.stat}>
          <p>
            {(countAll[0] > 1 && countAll[0] + " items") ||
              countAll[0] + " item"}
          </p>
          <p>Low: {countAll[1]}</p>
          <p>Medium: {countAll[2]}</p>
          <p>High: {countAll[3]}</p>
        </div>
      </div>
      <div className={styles.pending}>
        <p className={styles.title}>Pending</p>
        <div className={styles.stat}>
          <p>
            {(countPending[0] > 1 && countPending[0] + " items") ||
              countPending[0] + " item"}
          </p>
          <p>Low: {countPending[1]}</p>
          <p>Medium: {countPending[2]}</p>
          <p>High: {countPending[3]}</p>
        </div>
      </div>
      <div className={styles.completed}>
        <p className={styles.title}>Completed</p>
        <div className={styles.stat}>
          <p>
            {(countCompleted[0] > 1 && countCompleted[0] + " items") ||
              countCompleted[0] + " item"}
          </p>
          <p>Low: {countCompleted[1]}</p>
          <p>Medium: {countCompleted[2]}</p>
          <p>High: {countCompleted[3]}</p>
        </div>
      </div>
    </>
  );
}

export default Stat;
