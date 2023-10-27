"use client";

import React from "react";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <div className={styles.container}>loading</div>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Login</button>
      </form>
      <button onClick={() => signIn("google")} className={styles.button}>
        Login With Google
      </button>
    </div>
  );
};

export default login;
