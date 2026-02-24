import Image from "next/image";
import Button from "../components/Button/Button";
import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      
      {/* ================= HERO SECTION ================= */}
      <div className={styles.top}>
        <Image
          src="/image.png"
          alt="Team working together"
          fill
          priority
          className={styles.img}
        />
        <div className={styles.desc}>
          <h2>Digital Storytellers</h2>
          <p>Handcrafting award winning digital experiences</p>
        </div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className={styles.bottom}>
        
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h1>Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae.
            A suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo
            ea eveniet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae,
            a suscipit eos. Animi quibusdam cum omnis officiis voluptatum
            quo ea eveniet.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <h1>What We Do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos.
          </p>

          <ul className={styles.list}>
            <li>Creative Illustrations</li>
            <li>Dynamic Websites</li>
            <li>Fast and Handy</li>
            <li>Mobile Apps</li>
          </ul>

          <div className={styles.buttonWrapper}>
            <Button text="Contact" />
          </div>
        </div>

      </div>
    </div>
  );
}