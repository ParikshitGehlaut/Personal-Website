import React from "react";
import styles from "./skills.module.css";
import Image from "next/image";
const Skills = () => {
  return (
    <div className={styles.skillContainer}>
      <h1>Programming Skills</h1>
      <div className={styles.box}>
        <div className={styles.subset}>
          <div className={styles.skillImgContainer}>
            <Image
              src="/cpp_logo.png"
              alt="C++ logo"
              height={30}
              width={30}
              className={styles.logoimg}
            />
          </div>
          <span>C++ </span>
        </div>
        <div className={styles.subset}>
          <div className={styles.skillImgContainer}>
            <Image
              src="/java_logo.png"
              alt="Java logo"
              height={30}
              width={30}
              className={styles.logoimg}
            />
          </div>
          <span>Java</span>
        </div>
        <div className={styles.subset}>
          <div className={styles.skillImgContainer}>
            <Image
              src="/python.webp"
              alt="python logo"
              height={30}
              width={30}
              className={styles.logoimg}
            />
          </div>
          <span>Python</span>
        </div>
        <div className={styles.subset}>
          <div className={styles.skillImgContainer}>
            <Image
              src="/js_logo.png"
              alt="JS logo"
              height={30}
              width={30}
              className={styles.logoimg}
            />
          </div>
          <span>JavaScript</span>
        </div>
        <div className={styles.subset}>
          <div className={styles.skillImgContainer}>
            <Image
              src="/pytorch_logo.png"
              alt="PyTorch logo"
              height={30}
              width={30}
              className={styles.logoimg}
            />
          </div>
          <span>PyTorch</span>
        </div>
        <div className={styles.subset}>
          <div className={styles.skillImgContainer}>
            <Image
              src="/react.png"
              alt="reactJs logo"
              height={30}
              width={30}
              className={styles.logoimg}
            />
          </div>
          <span>React</span>
        </div>
        <div className={styles.subset}>
          <div className={styles.skillImgContainer}>
            <Image
              src="/next.webp"
              alt="Next.js logo"
              height={30}
              width={30}
              className={styles.logoimg}
            />
          </div>
          <span>Next.js</span>
        </div>
        <div className={styles.subset}>
          <div className={styles.skillImgContainer}>
            <Image
              src="/mongodb.webp"
              alt="mongodb logo"
              height={30}
              width={30}
              className={styles.logoimg}
            />
          </div>
          <span>MongoDB</span>
        </div>
        <div className={styles.subset}>
          <div className={styles.skillImgContainer}>
            <Image
              src="/tailwind.webp"
              alt="TailwindCSS logo"
              height={30}
              width={30}
              className={styles.logoimg}
            />
          </div>
          <span>TailwindCSS</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
