import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const page = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.cattitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt=""
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
