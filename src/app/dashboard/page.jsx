"use client";

import React from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";

const dashboard = () => {
  const session = useSession();

  console.log(session);

  return <div className={styles.container}>dashboard</div>;
};

export default dashboard;
