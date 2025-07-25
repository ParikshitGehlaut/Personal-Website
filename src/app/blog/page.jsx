export const dynamic = "force-dynamic";
import { headers } from "next/headers";
import React from "react";
import styles from "./blogPost.module.css";
import BlogList from "../components/blogList/BlogList";
import BlogItem from "../components/blogItem/BlogItem";

export const metadata = {
  title: "Blog",
  description:
    "Welcome to Blog section! you can read written by Parikshit Gehlaut.",
  robots: "index, follow",
};

const getData = async () => {
  try {
    const headersList = headers();
    const host = headersList.get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

    const res = await fetch(`${protocol}://${host}/api/posts`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

const page = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <BlogList />
      </div>

      <div>
        <h1 className={styles.sectionTitle}>Recents Posts</h1>
        {Array.isArray(data) ? (
          data.map((post) => <BlogItem key={post._id} item={post} />)
        ) : (
          <p>Posts couldn't be loaded.</p>
        )}
      </div>
    </div>
  );
};

export default page;
