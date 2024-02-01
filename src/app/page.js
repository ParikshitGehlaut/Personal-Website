import styles from "./page.module.css";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import BlogList from "./components/blogList/BlogList";
export default async function Home() {
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
