import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import styles from "./home.module.css"
export const dynamic = "force-dynamic";
import { headers } from "next/headers";
import BlogItem from "./components/blogItem/BlogItem";

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

export default async function Home() {
  const data = await getData();
  data.forEach((post) => console.log(post.id));


  return (
    <div>
      <Intro />
      <Skills />
      <div>
        <h1 className={styles.sectionTitle}>Recents Posts</h1>
        {Array.isArray(data) ? (
          data.map((post) => <BlogItem key={post.id} item={post} />)
        ) : (
          <p>Posts couldn't be loaded.</p>
        )}
      </div>
    </div>
  );
}
