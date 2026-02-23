import Link from "next/link";
import Theme from "../theme/theme";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.container}>
      
      {/* Logo */}
      <div className={styles.logo}>
        DigiCraft
      </div>

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
        </div>
      </div>

    </nav>
  );
}