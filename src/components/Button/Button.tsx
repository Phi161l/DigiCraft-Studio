"use client";

import styles from "./Button.module.css";

type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  const handleClick = () => {
    alert("Button clicked 🚀");
  };

  return (
    <button className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
}