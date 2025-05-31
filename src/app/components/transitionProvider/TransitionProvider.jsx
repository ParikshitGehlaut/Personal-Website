"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import styles from "./transitionProvider.module.css";
import { usePathname } from "next/navigation";
const TransitionProvider = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div className={styles.container}>
        <motion.div
          key={pathname}
          className={styles.motionScreenone}
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.div
          key={pathname}
          className={styles.motionScreenpath}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {pathname.substring(1)}
        </motion.div>
        <header className={styles.nav}>
          <Navbar />
        </header>
        <div className={styles.wrapper}>
          {children}
          <Footer />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
