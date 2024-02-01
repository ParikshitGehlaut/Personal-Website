"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./responsiveNav.module.css";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
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
          {/* <Link href="https://drive.google.com/drive/u/0/my-drive">
            <button
              className={styles.button}
              href="https://drive.google.com/file/d/1eq7AqEaFHR-ComeGiRW-u7Nf68CcUllC/view?usp=sharing"
            >
              Resume
            </button>
          </Link> */}
          <button className={styles.btn}>
            <LoginLink>Sign in</LoginLink>
          </button>
          <button className={styles.btn}>
            <RegisterLink>Sign up</RegisterLink>
          </button>
        </div>
      )}
    </>
  );
};

export default ResponsiveNav;
