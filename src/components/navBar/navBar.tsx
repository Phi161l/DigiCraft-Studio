"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Theme from "../theme/theme";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";

export default function NavBar() {
  const route = useRouter();
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/api/me")
      .then(res => res.json())
      .then(data => setUser(data.user));
  }, []);

  function handleLogout() {
    fetch("/api/logout", {
      method: "POST",
    });

    route.push("/auth/login");
  }

  console.log(user)
  
  return (
    <nav className={styles.container}>
      {/* Logo */}
      <div className={styles.logo}>DigiCraft</div>

      {/* Right Side */}
      <div className={styles.right}>
        <Theme />

        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/dashboard">Dashboard</Link>
          { user &&  <button onClick={handleLogout} style={{backgroundColor: "#4ade80"}}> Logout </button>}
        </div>
      </div>
    </nav>
  );
}
