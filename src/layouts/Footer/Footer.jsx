import React from "react";
import styles from "./Footer.module.scss";
import Stat from "../../components/Stat/Stat";

function Footer() {
  return (
    <div className={styles.footer}>
      <Stat />
    </div>
  );
}

export default Footer;
