import styles from "./page.module.css";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import BlogList from "./components/blogList/BlogList";

// async function fetchBlogs() {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch(
//       "http://127.0.0.1:1337/api/blogs?populate=*",
//       options
//     );
//     const response = await res.json();
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }

export default async function Home() {
  // const blogs = await fetchBlogs();
  // console.log("Hi");
  // console.log("Blogs in page.js", blogs.data);
  return (
    <div className={styles.container}>
      <Intro />
      <Skills />
      <div className={styles.content}>
        <BlogList />
      </div>
    </div>
  );
}
