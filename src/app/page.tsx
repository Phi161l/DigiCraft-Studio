import Image from "next/image";
import styles from "./page.module.css";
import Button from "./components/Button/Button";
// import Hero from "public/hero.png";


export default function Home() {
  return (
    <div>
      <div>
        <h1> Better design for your digital products. </h1>
        <p> Turning your Idea into Reality. We bring together the teams from the global tech industry. </p>
        < Button /> 
      </div>

      <div>
        {/* <Image src={Hero} alt="" className={styles.img} /> */}
      </div>

    </div>
  );
}
 