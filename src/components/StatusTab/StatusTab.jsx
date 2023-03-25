import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./StatusTab.module.scss";
import { updateFilterStatus } from "../TodoItem/TodoSlice";

function StatusTab() {
  const [isActiveAll, setIsActiveAll] = useState(false);
  const [isActivePending, setIsActivePending] = useState(false);
  const [isActiveCompleted, setIsActiveCompleted] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);

  const dispatch = useDispatch();

  const handleUpdateFilterStatus = (e) => {
    if (e.target.value === "All Status") {
      setIsActiveAll(true);
      setIsActivePending(false);
      setIsActiveCompleted(false);
    } else if (e.target.value === "Pending") {
      setIsActiveAll(false);
      setIsActivePending(true);
      setIsActiveCompleted(false);
    } else if (e.target.value === "Completed") {
      setIsActiveAll(false);
      setIsActivePending(false);
      setIsActiveCompleted(true);
    }
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <>
      <button
        className={
          isActiveAll || filterStatus === "All Status"
            ? styles.tab_item_button_active
            : styles.tab_item_button
        }
        onClick={handleUpdateFilterStatus}
        value="All Status"
      >
        All
      </button>
      <button
        className={
          isActivePending
            ? styles.tab_item_button_active
            : styles.tab_item_button
        }
        onClick={handleUpdateFilterStatus}
        value="Pending"
      >
        Pending
      </button>
      <button
        className={
          isActiveCompleted
            ? styles.tab_item_button_active
            : styles.tab_item_button
        }
        onClick={handleUpdateFilterStatus}
        value="Completed"
      >
        Completed
      </button>
    </>
  );
}

export default StatusTab;
