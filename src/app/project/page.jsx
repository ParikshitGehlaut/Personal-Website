import React from "react";
import styles from "./project.module.css";
import Image from "next/image";
import Link from "next/link";
import { MotionDiv } from "../components/MotionDiv";
export const metadata = {
  title: "Projects",
  description:
    "Welcome to Project section, here all academic or personal Projects made by Parikshit are displayed. Click on the link provided to see deployed projects or check source code on Github.",
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Project = () => {
  const projects = [
    {
      id: 0,
      title: "NewsMonkey",
      desc: "Created a responsive news website, 'NewsMonkey,' using React and Bootstrap. Integrated real-time news updates from a News API. Implemented React Router for seamless navigation.",
      techStack: "React.js and Bootstrap",
      GithubLink: "https://github.com/ParikshitGehlaut/newsapp",
      img: "https://imgs.search.brave.com/fO5ruxwigEe4vrEVTdWL-Dmp-B5CSKcyTIbLzg-fOLI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9iMjkz/MDIxMC5zbXVzaGNk/bi5jb20vMjkzMDIx/MC93cC1jb250ZW50/L3VwbG9hZHMvTmV3/LVdlYnNpdGUtQW5u/b3VuY2VtZW50Lmpw/Zz9sb3NzeT0xJnN0/cmlwPTEmd2VicD0x",
      // DeploymentLink: "",
    },
    {
      id: 1,
      title: "Todos List",
      desc: "Developed an intuitive single-page Todo List website with React and Bootstrap. Improved user productivity by allowing efficient task management.",
      techStack: "React.js",
      GithubLink: "https://github.com/ParikshitGehlaut/todo-list",
      img: "https://imgs.search.brave.com/pGXTY50c7_lYusRzcdyOZcuvWIHQigon4brQd-YdPr0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/MTE3NDMzNS9waG90/by90by1kby1saXN0/LW9uLW5vdGUtcGFk/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1oTmhLbmVFSm9i/VU1oejVJTldrSmF6/OFZjZ3VHMzRyamRC/ZVQ3ODlVaVlNPQ",
      // DeploymentLink: "",
    },
    {
      id: 2,
      title: "Microsoft Website Clone",
      desc: "Homepage of Microsoft official website consisting of responsive navbar, main content etc",
      techStack: "Tailwindcss and HTML",
      GithubLink: "https://github.com/ParikshitGehlaut/Microsoft-Clone",
      img: "https://imgs.search.brave.com/3kojDUzBdpODCih3blcw5Rjbjt2VEtDHK95j6qKFRq8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ1/OTM1OTAwMC9waG90/by9pc3N5LWxlcy1t/b3VsaW5lYXV4LWZy/YW5jZS10aGUtbG9n/by1vZi10aGUtdS1z/LWNvbXB1dGVyLWFu/ZC1taWNyby1jb21w/dXRpbmctY29tcGFu/eS1taWNyb3NvZnQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWhHcFljeDhkcHl3/LThHT2tyeWZHX0sy/MjBlMzM0ckIxcENT/OC1iN3dqcWM9",
      // DeploymentLink: "",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Projects</h1>
      {projects.map((project) => (
        <MotionDiv
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 0.1 + project.id * 0.5,
            ease: "easeInOut",
            duration: 0.5,
          }}
          className={styles.item}
          key={project.id}
        >
          <div className={styles.content}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.desc}>{project.desc}</p>
            <p className={styles.tech}>{project.techStack}</p>
            <span className={styles.linkOption}>
              <Link href={project.GithubLink}>
                <Image src="/githubIcon.png" alt="" width={50} height={50} />
              </Link>
              {project.DeploymentLink && (
                <Link href={project.DeploymentLink}>
                  <Image src="/link.png" alt="" width={50} height={50} />
                </Link>
              )}
            </span>
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              width={320}
              height={356}
              src={project.img}
              alt=""
              priority={true}
            />
          </div>
        </MotionDiv>
      ))}
    </div>
  );
};

export default Project;
