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
              src="/C.png"
              alt="C logo"
              height={30}
              width={30}
              className={styles.logoimg}
            />
          </div>
          <span>C Programming</span>
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
              src="/django-logo.webp"
              alt="django logo"
              height={30}
              width={30}
              className={styles.logoimg}
            />
          </div>
          <span>Django</span>
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
      </div>
    </div>
  );
};

export default Skills;
