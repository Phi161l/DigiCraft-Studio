"use client";
import { useState } from "react";
import styles from "./theme.module.css";

export default function Theme() {
  const [mode, setMode] = useState("light"); // light | dark

  const toggleTheme = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);

    // 🔥 Later: call your API here
    // connectApi(newMode)
  };

  return (
    <div className={styles.container} onClick={toggleTheme}>
      <span className={styles.icon}>🌙</span>

      <div
        className={`${styles.circle} ${mode === "dark" ? styles.dark : ""}`}
      />

      <span className={styles.icon}>☀️</span>
    </div>
  );
}
