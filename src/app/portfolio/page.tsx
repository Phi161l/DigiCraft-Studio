import Image from "next/image";
import styles from "./portfolio.module.css";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Choose a gallery </h2>

      <div className={styles.images}>
        <Link href="/portfolio/illustration">
          <Image src="/illustration.png" alt="" width={200} height={400} />
          <p> Illustrations </p>
        </Link>

        <Link href="/portfolio/websites">
          <Image src="/websites.jpg" alt="" width={200} height={400} />
          <p> Websites </p>
        </Link>

        <Link href="/portfolio/apps">
          <Image src="/apps.jpg" alt="" width={200} height={400} />
          <p> Applications </p>
        </Link>
      </div>
    </div>
  );
}
