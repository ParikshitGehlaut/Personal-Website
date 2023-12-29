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
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact Me</Link>
          <Link href="https://drive.google.com/drive/u/0/my-drive">
            <button
              className={styles.button}
              href="https://drive.google.com/file/d/1eq7AqEaFHR-ComeGiRW-u7Nf68CcUllC/view?usp=sharing"
            >
              Resume
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ResponsiveNav;
