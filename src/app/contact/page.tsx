import Image from "next/image";
import Button from "../components/Button/Button";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>

      <div className={styles.container}>
        
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <Image
            src="/contact.png"
            alt="Contact illustration"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <form className={styles.form}>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <textarea placeholder="message" />
            <Button text="Send" />
          </form>
        </div>

      </div>
    </div>
  );
}