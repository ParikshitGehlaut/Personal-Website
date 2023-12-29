"use client";
import React from "react";
import styles from "./singlePost.module.css";
const blogPost = ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>{params.slug}</h2>
      </div>
    </div>
  );
};

export default blogPost;
