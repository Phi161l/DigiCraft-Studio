"use client";

import { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.redirect) {
      window.location.href = data.redirect;
    } else {
      alert(data.error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}> Welcome Back </h1>
        <p className={styles.subtitle}>Please sign in to see the dashboard.</p>

        <form className={styles.form} onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className={styles.button} type="submit">
            Login
          </button>
        </form>

        {message && <p style={{ marginTop: "1rem" }}>{message}</p>}

        <div className={styles.divider}>- OR -</div>

        <p className={styles.register}>
          {" "}
          <Link href="/dashboard/register"> Create new account </Link>
        </p>
      </div>
    </div>
  );
}
