import React from "react";
import styles from "./skills.module.css";
import Image from "next/image";
const Skills = () => {
  return (
    <div className={styles.container}>
      <h1>Programming Skills</h1>
      <div className={styles.box}>
        <div className={styles.subset}>
          <div className={styles.imgContainer}>
            <Image
              src="/react.png"
              alt="react logo"
              fill
              className={styles.logoimg}
            />
          </div>
          <span>React</span>
        </div>
        <div className={styles.subset}>
          <div className={styles.imgContainer}>
            <Image
              src="/next.webp"
              alt="react logo"
              fill
              className={styles.logoimg}
            />
          </div>
          <span>Next.js</span>
        </div>
        <div className={styles.subset}>
          <div className={styles.imgContainer}>
            <Image
              src="/mongodb.webp"
              alt="mongodb logo"
              fill
              className={styles.logoimg}
            />
          </div>
          <span>MongoDB</span>
        </div>
        <div className={styles.subset}>
          <div className={styles.imgContainer}>
            <Image
              src="/python.webp"
              alt="python logo"
              fill
              className={styles.logoimg}
            />
          </div>
          <span>Python</span>
        </div>
        <div className={styles.subset}>
          <div className={styles.imgContainer}>
            <Image
              src="/django-logo.webp"
              alt="django logo"
              fill
              className={styles.logoimg}
            />
          </div>
          <span>Django</span>
        </div>
        <div className={styles.subset}>
          <div className={styles.imgContainer}>
            <Image
              src="/tailwind.webp"
              alt="tailwind logo"
              fill
              className={styles.logoimg}
            />
          </div>
          <span>Tailwindcss</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
