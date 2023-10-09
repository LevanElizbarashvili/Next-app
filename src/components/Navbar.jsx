import Link from "next/link";
import React from "react";

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
    <div>
      <Link href={"/"}>Name</Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.href}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
