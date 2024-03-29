import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (category) => {
  const data = items[category];
  if (data) {
    return data;
  }
  return notFound();
};

export async function generateMetadata({ params }) {
  const post = await getData(params.category);
  return {
    title: params.category,
    description: post[0].desc,
  };
}

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.cattitle}>{params.category}</h1>
      {data.map((item) => {
        return (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.description}>{item.desc}</p>
              <Button url="#" text="See More" />
            </div>
            <div className={styles.imgContainer}>
              <Image
                src={item.image}
                alt=""
                fill={true}
                className={styles.img}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
