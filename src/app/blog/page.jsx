import React from "react";
import styles from "./blogPost.module.css";
import BlogList from "../components/blogList/BlogList";
export const metadata = {
  title: "Blog",
  description:
    "Welcome to Blog section! you can read written by Parikshit, that are available on medium.com",
  robots: "index, follow",
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
