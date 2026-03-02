import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <p> ©2023 Lamamia. All rights reserved. </p>

      <div className={styles.icons}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          className={styles.icon}
          alt=""
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className={styles.icon}
          alt=""
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className={styles.icon}
          alt=""
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className={styles.icon}
          alt=""
        />
      </div>
    </div>
  );
}
