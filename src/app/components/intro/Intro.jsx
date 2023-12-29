import React from "react";
import Image from "next/image";
import styles from "./intro.module.css";
const Intro = () => {
  return (
    <div className={styles.container}>
      <section className={styles.introSection}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            <b>Hello!</b> I'm <span className={styles.purple}>Parikshit.</span>{" "}
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
                I have experience working with React and Django.
              </p>
              <button className={styles.button}>Visit Github</button>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src="/bg.jpg"
                alt="personal image"
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
