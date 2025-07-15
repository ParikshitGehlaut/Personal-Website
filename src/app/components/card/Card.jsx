import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import { MotionDiv } from "../MotionDiv";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Card = ({ post }) => {
  return (
    <Link href={post.link} target="_blank" className={styles.card}>
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: post.id * 0.3,
          ease: "easeInOut",
          duration: 0.5,
        }}
        className={styles.cardContent}
      >
        <div className={styles.cardPostTitle}>{post.title}</div>
        <div className={styles.cardPostDesc}>{post.desc}</div>
        <div className={styles.cardDate}>{post.date}</div>
      </MotionDiv>
    </Link>
  );
};

export default Card;
