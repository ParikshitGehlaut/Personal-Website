import React from "react";
import styles from "./blogList.module.css";
import Card from "../card/Card";
// import { getposts } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const BlogList = async () => {
  // FETCH DATA WITHOUT AN API
  // const posts = await getposts();

  // FETCH DATA WITH AN API
  // const posts = await getData();

  const posts = [
    {
      id: 1,
      title: "AI",
      desc: "Introduction to Basic Machine Learning Algorithms",
      date: "4 Jan, 2024",
      link: "https://medium.com/@parikshitgehlaut/intro-to-basic-ml-algorithms-afb84e58abb3",
    },
    {
      id: 2,
      title: "Web Development",
      desc: "How to Learn Web Development in 2024",
      date: "3 Jan, 2024",
      link: "https://medium.com/@parikshitgehlaut/how-to-learn-web-development-in-2024-30be729358ac",
    },
    {
      id: 3,
      title: "Web Development",
      desc: "Must-Have VS Code Extensions for Web Developers",
      date: "6 Jan, 2024",
      link: "https://medium.com/@parikshitgehlaut/must-have-vs-code-extensions-for-web-developers-d9a184408029",
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.Title}>Featured Blogs</h1>
      <div className={styles.cardWrapper}>
        {posts.map((post) => (
          <Card post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
