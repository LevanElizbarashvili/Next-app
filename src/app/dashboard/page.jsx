"use client";

import React from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";

const dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const session = useSession();

  const router = useRouter();

  const { data, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === "loading") {
    return <div className={styles.container}>loading</div>;
  }
  if (session.status === "unauthenticated") {
    router.push("dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data?.user.name,
        }),
      });
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading..."
            : data?.map((post) => {
                <div className="styles.post" key={post.id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className="styles.delete"
                    onClick={() => handleDelete(post.id)}
                  >
                    X
                  </span>
                </div>;
              })}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />
          <input
            type="text"
            placeholder="Image"
            className={styles.input}
            width={200}
            height={100}
          />
          <textarea
            cols={30}
            rows={10}
            className={styles.textArea}
            placeholder="content"
          ></textarea>
          <button className={styles.button}>Add</button>
        </form>
      </div>
    );
  }
};

export default dashboard;
