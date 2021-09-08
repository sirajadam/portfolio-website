import React from "react";
import styles from "./HeaderTitle.module.css";

const HeaderTitle = (props) => {
  return (
    <div className={styles["section-header"]}>
      <div className={styles.divider}></div>
      <h1 className={styles["section-title"]}>{props.title}</h1>
    </div>
  );
};

export default HeaderTitle;
