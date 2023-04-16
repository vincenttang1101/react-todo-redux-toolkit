import styles from "./Header.module.scss";
import { AddTodo, FilterPriority, StatusTab } from "../../features";

export const Header = () => {
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
};
