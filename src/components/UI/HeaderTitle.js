import React from "react";
import styles from "./HeaderTitle.module.css";

const HeaderTitle = () => {
  return (
    <div className={styles["section-header"]}>
      <div className={styles.divider}></div>
      <h1 className={styles["section-title"]}>Projects</h1>
    </div>
  );
};

export default HeaderTitle;
