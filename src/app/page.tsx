import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/Button/Button";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          Better design <br />
          for your digital <br />
          products.
        </h1>

        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together
          the teams from the global tech industry.
        </p>

        <Button text="See Our Works" />
      </div>

      <div className={styles.right}>
        <Image
          src="/hero.png"
          alt="Hero Illustration"
          fill
          className={styles.heroImg}
          priority
        />
      </div>
    </section>
  );
}