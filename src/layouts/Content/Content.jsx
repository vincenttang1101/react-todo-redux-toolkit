import { PaginateTodo } from "../../features";
import styles from "./Content.module.scss";

export const Content = () => {
  return (
    <div className={styles.content_wrapper}>
      <PaginateTodo />
    </div>
  );
};
