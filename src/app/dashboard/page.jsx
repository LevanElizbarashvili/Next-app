"use client";

import React from "react";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const dashboard = () => {
  const session = useSession();

  const router = useRouter();

  if (session.status === "loading") {
    return <div className={styles.container}>loading</div>;
  }
  if (session.status === "unauthenticated") {
    router.push("dashboard/login");
  }
  if (session.status === "authenticated") {
    return <div className={styles.container}>dashboard</div>;
  }
};

export default dashboard;
