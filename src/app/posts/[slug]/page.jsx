export const dynamic = "force-dynamic";
import { headers } from "next/headers";
import styles from "./singlePage.module.css";
import React from "react";
import Image from "next/image";

const getData = async (slug) => {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const singlePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data?.title}</h1>

      <div className={styles.user}>
        <div className={styles.userImageContainer}>
          <Image
            src="/myself.jpg"
            alt="Parikshit Gehlaut"
            fill
            className={styles.avatar}
          />
        </div>
        <div className={styles.userTextContainer}>
          <span className={styles.username}>Parikshit Gehlaut</span>
          <span className={styles.date}>
            {data.createdAt?.substring(0, 10)}
          </span>
        </div>
      </div>

      {data.img && (
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt="Cover Image"
            fill
            className={styles.image}
          />
        </div>
      )}

      <div className={styles.description}>
        <div dangerouslySetInnerHTML={{ __html: data?.desc }} />
      </div>
    </div>
  );
};

export default singlePage;
