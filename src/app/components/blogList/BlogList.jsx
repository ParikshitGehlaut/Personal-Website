import React from "react";
import styles from "./blogList.module.css";
import Card from "../card/Card";

const BlogList = () => {
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
    {
      id: 4,
      title: "Web Development",
      desc: "Next.js: Powering Modern Websites",
      date: "19 Jan, 2024",
      link: "https://medium.com/@parikshitgehlaut/next-js-powering-modern-websites-5e1b4d561276",
    },
    {
      id: 5,
      title: "Web Development",
      desc: "Build an Awesome Portfolio Website Using Next.js and Tailwind CSS.",
      date: "12 Feb, 2024",
      link: "https://medium.com/@parikshitgehlaut/build-an-awesome-portfolio-website-using-next-js-and-tailwind-css-a6ae5c343098",
    },
    {
      id: 6,
      title: "Deep Learning",
      desc: "Day 1: Introduction to PyTorch.",
      date: "27 May, 2024",
      link: "https://medium.com/@parikshitgehlaut/day-1-introduction-to-pytorch-ddea1da562dd",
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.sectionTitle}>Featured Blogs</h1>
      <div className={styles.cardWrapper}>
        {posts.map((post) => (
          <Card post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
