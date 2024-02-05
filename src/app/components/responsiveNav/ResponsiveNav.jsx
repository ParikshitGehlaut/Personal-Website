"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./responsiveNav.module.css";
const ResponsiveNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={styles.burger}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" onClick={() => setOpen(!open)}>
            Home
          </Link>
          <Link href="/blog" onClick={() => setOpen(!open)}>
            Blog
          </Link>
          <Link href="/project" onClick={() => setOpen(!open)}>
            Projects
          </Link>
          <Link href="/contact" onClick={() => setOpen(!open)}>
            Contact Me
          </Link>
        </div>
      )}
    </>
  );
};

export default ResponsiveNav;
