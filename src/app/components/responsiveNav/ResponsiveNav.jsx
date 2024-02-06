"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./responsiveNav.module.css";
import { motion } from "framer-motion";
const ResponsiveNav = () => {
  const [open, setOpen] = useState(false);
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
    },
  };
  const secondVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const lastVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
    },
  };
  return (
    <>
      <div
        className={styles.burger}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <motion.div
          variants={topVariants}
          animate={open ? "opened" : "closed"}
          className={styles.firstLine}
        ></motion.div>
        <motion.div
          variants={secondVariants}
          animate={open ? "opened" : "closed"}
          className={styles.secondLine}
        ></motion.div>
        <motion.div
          variants={lastVariants}
          animate={open ? "opened" : "closed"}
          className={styles.lastLine}
        ></motion.div>
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
