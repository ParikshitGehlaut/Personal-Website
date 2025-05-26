import React from "react";
import styles from "./skills.module.css";
import Image from "next/image";

const Skills = () => {
  const skillsData = [
    { name: "C++", logo: "/cpp_logo.png", alt: "C++ logo" },
    { name: "Java", logo: "/java_logo.png", alt: "Java logo" },
    { name: "Python", logo: "/python.webp", alt: "Python logo" },
    { name: "JavaScript", logo: "/js_logo.png", alt: "JS logo" },
    { name: "PyTorch", logo: "/pytorch_logo.png", alt: "PyTorch logo" },
    { name: "React", logo: "/react.png", alt: "ReactJS logo" },
    { name: "Next.js", logo: "/next.webp", alt: "Next.js logo" },
    { name: "MongoDB", logo: "/mongodb.webp", alt: "MongoDB logo" },
    { name: "TailwindCSS", logo: "/tailwind.webp", alt: "TailwindCSS logo" },
  ];

  return (
    <div className={styles.skillContainer}>
      <h1>Programming Skills</h1>
      <div className={styles.box}>
        {skillsData.map((skill) => (
          <div className={styles.subset} key={skill.name}>
            <div className={styles.skillImgContainer}>
              <Image
                src={skill.logo}
                alt={skill.alt}
                height={48}
                width={48}  
                className={styles.logoimg}
              />
            </div>
            <span className={styles.skillName}>{skill.name}</span> {/* Added class here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
