import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import ResponsiveNav from "../responsiveNav/ResponsiveNav";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" className={styles.link}>
          ParikshitGehlaut.com
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/blog" className={styles.link}>
          Blog
        </Link>
        <Link href="/project" className={styles.link}>
          Projects
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact Me
        </Link>
      </div>
      <ResponsiveNav />
    </div>
  );
};

export default Navbar;
