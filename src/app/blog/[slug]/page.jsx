import React from "react";
import Image from "next/image";
import styles from "./singlePost.module.css";
import { getpost } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${slug}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const blogPost = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITHOUT AN API
  const post = await getpost(slug);

  // FETCH DATA WITH AN API
  // const post = await getData(slug);
  return (
    <div className={styles.container}>
      {post.img ? (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      ) : (
        <div className={styles.imgContainer}>
          <Image src="/w2.jpg" alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="/w1.jpg"
            alt=""
            height={50}
            width={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Parikshit Gehlaut</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default blogPost;
