import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            aperiam. Iste iusto fuga beatae. Debitis ea modi officia odit
            provident repellendus asperiores, sit illo, error saepe
            reprehenderit molestias ipsa? Eius.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>john Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          atque, sapiente commodi enim architecto vel nisi placeat, consectetur
          neque optio sint incidunt quos magnam, animi reiciendis nulla hic.
          Aliquid, optio. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident architecto dolorum quo officiis earum, corrupti
          necessitatibus accusantium minus saepe veniam eveniet. Veniam quasi
          saepe adipisci est fugit! Doloremque, dolores! Iste.Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Maxime atque, sapiente commodi
          enim architecto vel nisi placeat, consectetur neque optio sint
          incidunt quos magnam, animi reiciendis nulla hic. Aliquid, optio.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          architecto dolorum quo officiis earum, corrupti necessitatibus
          accusantium minus saepe veniam eveniet. Veniam quasi saepe adipisci
          est fugit! Doloremque, dolores! Iste. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Maxime atque, sapiente commodi enim
          architecto vel nisi placeat, consectetur neque optio sint incidunt
          quos magnam, animi reiciendis nulla hic. Aliquid, optio. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Provident architecto
          dolorum quo officiis earum, corrupti necessitatibus accusantium minus
          saepe veniam eveniet. Veniam quasi saepe adipisci est fugit!
          Doloremque, dolores! Iste.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
