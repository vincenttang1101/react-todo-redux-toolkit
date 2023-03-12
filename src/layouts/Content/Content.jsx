import React from "react";
import PaginateTodoList from "../../components/PaginateTodoList/PaginateTodoList";
import styles from "./Content.module.scss";

function Content() {
  return (
    <div className={styles.content_wrapper}>
      <PaginateTodoList />
    </div>
  );
}

export default Content;
