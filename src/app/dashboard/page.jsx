"use client";

import React from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const dashboard = () => {
  const session = useSession();

  console.log(session);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  return <div className={styles.container}>dashboard</div>;
};

export default dashboard;
