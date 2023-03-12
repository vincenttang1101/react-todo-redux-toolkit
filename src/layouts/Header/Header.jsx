import React from "react";
import styles from "./Header.module.scss";
import AddTodo from "../../components/AddTodo/AddTodo";
import FilterPriority from "../../components/FilterPriority/FilterPriority";
import StatusTab from "../../components/StatusTab/StatusTab";

function Header() {
  return (
    <>
      <div className={styles.relative}>
        <div className={styles.title}>Todo List</div>
      </div>

      <div className={styles.header}>
        <div className={styles.header_add_filter}>
          <AddTodo />
          <FilterPriority />
        </div>
        <div className={styles.header_tab_group}>
          <StatusTab />
        </div>
      </div>
    </>
  );
}

export default Header;
