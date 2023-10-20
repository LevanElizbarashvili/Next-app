import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "NXT - Contact",
  description: "Contact us",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep In Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            fill={true}
            alt="contact"
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Name"
            className={styles.input}
          ></input>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
          ></input>
          <textarea cols={30} rows={10} className={styles.textArea}></textarea>
          <Button className={styles.button} url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
