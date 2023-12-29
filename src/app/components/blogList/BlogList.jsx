import React from "react";
import styles from "./blogList.module.css";
import Card from "../card/Card";
const BlogList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.Title}>Featured Blogs</h1>
      <div className={styles.cardWrapper}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default BlogList;
