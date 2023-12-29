import React from "react";
import styles from "./blogPost.module.css";
import BlogList from "../components/blogList/BlogList";
const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blogs</h1>
      <div className={styles.content}>
        <BlogList />
      </div>
    </div>
  );
};

export default page;
