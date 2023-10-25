"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkmodeToggle/DarkModeToggle";
import { signOut } from "next-auth/react";

const links = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Contact", href: "/contact" },
  { id: 4, name: "Portfolio", href: "/portfolio" },
  { id: 5, name: "Blog", href: "/blog" },
  { id: 6, name: "dashboard", href: "/dashboard" },
];
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        NXT
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.href}>
            {link.name}
          </Link>
        ))}
        <button
          className={styles.logout}
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
