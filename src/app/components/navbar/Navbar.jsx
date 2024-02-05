import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import ResponsiveNav from "../responsiveNav/ResponsiveNav";

const Navbar = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Parikshit's Portfolio</div>
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
