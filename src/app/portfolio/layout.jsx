import React from "react";
import styles from "./page.module.css";

const layout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.maintitle}>Our Works</h1>
      <div>{children}</div>
    </div>
  );
};

export default layout;
