"use client";

import { useContext } from "react";
import styles from "./DarkModeToggle.module.css";
import { ThemeContext } from "../../../context/ThemeContext";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggleTheme}>
      <div className={styles.switch}>☽</div>
      <div className={styles.switch}>☀</div>
      <div
        className={styles.ball}
        style={theme === "dark" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
