import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = ({ post }) => {
  // console.log(post);
  // const { Title, Excerpt } = blog.attributes;
  // const imageUrl =
  //   "https://images.pexels.com/photos/18178855/pexels-photo-18178855/free-photo-of-sculpture-of-cragg-by-heydar-aliyev-center.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <>
      <Link href={post.link}>
        <div className={styles.card}>
          {/* {post.img ? (
        <div className={styles.cardImgContainer}>
          <Image
            src={post.img}
            alt="blog image"
            fill
            className={styles.cardImg}
          />
        </div>
      ) : (
        <div className={styles.cardImgContainer}>
          <Image
            src={imageUrl}
            alt="blog image"
            fill
            className={styles.cardImg}
          />
        </div>
      )} */}
          <div className={styles.cardTextContainer}>
            <div className={styles.cardTitle}>{post.title}</div>
            <div className={styles.cardDesc}>{post.desc}</div>
            <div className={styles.date}>{post.date}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
