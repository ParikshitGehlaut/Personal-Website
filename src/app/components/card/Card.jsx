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
    <>
      <Link href={post.link} target="_blank">
        <MotionDiv
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: post.id * 0.3,
            ease: "easeInOut",
            duration: 0.5,
          }}
          className={styles.card}
        >
          <div className={styles.cardTextContainer}>
            <div className={styles.cardTitle}>{post.title}</div>
            <div className={styles.cardDesc}>{post.desc}</div>
            <div className={styles.date}>{post.date}</div>
          </div>
        </MotionDiv>
      </Link>
    </>
  );
};

export default Card;
