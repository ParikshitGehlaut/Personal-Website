import React from "react";
import styles from "./blogItem.module.css";
import Link from "next/link";
import parse from "html-react-parser";

const blogItem = ({ item }) => {
  if (!item) return null;

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt?.substring(0, 10)}
          </span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1 className={styles.title}>{item.title}</h1>
        </Link>
        <div className={styles.desc}>
          {parse(item?.desc?.substring(0, 200) || "No description available")}
        </div>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default blogItem;
