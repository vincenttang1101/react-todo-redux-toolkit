import styles from "./Footer.module.scss";
import { Stat } from "../../features";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Stat />
    </div>
  );
};
