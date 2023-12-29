import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
const Card = () => {
  // const { Title, Excerpt } = blog.attributes;
  // const imageUrl =
  //   "http://127.0.0.1:1337" +
  //   blog.attributes.Blogimage.data.attributes.formats.thumbnail.url;
  return (
    <div className={styles.card}>
      <div className={styles.cardImgContainer}>
        <Image src="/w1.jpg" alt="blog image" fill className={styles.cardImg} />
      </div>
      <div className={styles.cardTextContainer}>
        <div className={styles.cardTitle}>Lorem ipsum dolor sit amet.</div>
        <div className={styles.cardDesc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          blanditiis, error obcaecati at tenetur reprehenderit numquam quidem
          quia adipisci? Obcaecati, rerum et dignissimos ipsum aliquid sunt!
        </div>
        <Link href="/blog" className={styles.btn}>
          Read More{" "}
        </Link>
      </div>
    </div>
  );
};

export default Card;
