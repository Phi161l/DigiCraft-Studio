"use client";

import styles from "./register.module.css";

export default function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create an Account</h1>
        <p className={styles.subtitle}>
          Please sign up to see the dashboard.
        </p>

        <form className={styles.form}>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button className={styles.button} onClick={() => alert("dont come")}>Register</button>
        </form>

        <div className={styles.divider}>- OR -</div>

        <p className={styles.login}>
          Login with an existing account
        </p>
      </div>
    </div>
  );
}