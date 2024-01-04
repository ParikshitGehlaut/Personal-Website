import React from "react";
import styles from "./blogPost.module.css";
import BlogList from "../components/blogList/BlogList";

export const metadata = {
  title: "Blog",
  description:
    "Welcome to Parikshit Gehlaut's Portfolio.I am beginner Full Stack developer.With a passion for creating stunning, functional websites, I'm here to bring your online vision to life. Contact me today to discuss your next project",
};

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BlogList />
      </div>
    </div>
  );
};

export default page;
