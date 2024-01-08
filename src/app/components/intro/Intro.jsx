import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./intro.module.css";
const Intro = () => {
  return (
    <div className={styles.container}>
      <section className={styles.introSection}>
        <h1 className={styles.title}>
          <b>Hello!</b> I'm{" "}
          <b>
            {" "}
            <span className={styles.name}>Parikshit.</span>
          </b>{" "}
          I am Passionate <b>Web developer</b> .
        </h1>
        <div className={styles.box}>
          <div className={styles.textContainer}>
            <h1 className={styles.boxTitle}>About Me</h1>
            <p className={styles.boxDesc}>
              Hello, I am Parikshit. I am a Computer Science student at Indian
              Institute of Technology, Dharwad, India.
            </p>
            <p className={styles.boxDesc}>
              I have experience working with React, Next.js and Django.
            </p>
            <Link
              href="https://github.com/ParikshitGehlaut"
              className={styles.button}
            >
              Visit Github
            </Link>
          </div>
          <div className={styles.imgContainer}>
            <Image
              src="/personal.jpg"
              alt="personal image"
              width={240}
              height={320}
              priority={true}
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
