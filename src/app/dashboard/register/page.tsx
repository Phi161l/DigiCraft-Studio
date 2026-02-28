"use client";

import { useState } from "react";
import styles from "./register.module.css";
import Link from "next/link";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); 

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // prevent default form submit behavior

    // Send data to backend
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Registration successful! 🎉");
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        setMessage(data.error || "Something went wrong");
      }
    } catch (err) {
      setMessage("Server error, try again later.");
      console.error(err);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Create an Account</h1>
        <p className={styles.subtitle}>Please sign up to see the dashboard.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
            Register
          </button>
        </form>

        {message && <p style={{ marginTop: "1rem" }}>{message}</p>}

        <div className={styles.divider}>- OR -</div>

        <p className={styles.login}> <Link href= "/dashboard/login"> Login with an existing account </Link></p>
      </div>
    </div>
  );
}