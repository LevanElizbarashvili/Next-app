import Image from "next/image";
import styles from "./page.module.css";
import hero from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.description}>
          turning ideas into beautiful digital products. We bring your ideas to
          life
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}></div>
      <Image src={hero} alt="hero" className={styles.hero} />
    </div>
  );
}
