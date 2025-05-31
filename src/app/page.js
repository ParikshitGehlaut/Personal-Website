import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import BlogList from "./components/blogList/BlogList";
export default async function Home() {
  return (
    <div>
      <Intro />
      <Skills />
      <div>
        <BlogList />
      </div>
    </div>
  );
}
