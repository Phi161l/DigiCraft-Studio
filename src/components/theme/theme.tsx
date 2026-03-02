"use client";
import { useTheme } from "@/context/ThemeContext";
import styles from "./theme.module.css";

export default function Theme() {
  const { theme , toggleTheme } = useTheme(); 

  return (
    <div className={styles.container} onClick={toggleTheme}>
      <span className={styles.icon}>🌙</span>

      <div
        className={`${styles.circle} ${theme === "dark" ? styles.dark : ""}`}
      />

      <span className={styles.icon}>☀️</span>
    </div>
  );
}