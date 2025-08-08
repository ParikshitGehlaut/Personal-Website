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
          I am Passionate <b>Software developer</b> .
        </h1>
        <div className={styles.box}>
          <div className={styles.textContainer}>
            <h1 className={styles.boxTitle}>About Me</h1>
            <p className={styles.boxDesc}>
              Hello, I am Parikshit. I am a Computer Science student at Indian
              Institute of Technology Dharwad.
            </p>
            <p className={styles.boxDesc}>
              Currently, I am working as React Developer at Career Development Cell(CDC), IIT Dharwad. I am also part of 
              Outreach team of Institution Innovation Council(IIC), IIT Dharwad.
            </p>
            <div className={styles.boxButtonContainer}>
              <Link
                href="https://github.com/ParikshitGehlaut"
                target="_blank"
                className={styles.button}
              >
                Github
              </Link>
              <Link
                href="https://drive.google.com/drive/u/0/folders/1PNt9FnFpijgFRR-aejdDVtWh1PXT8XeH"
                target="_blank"
                className={styles.button}
              >
                Resume
              </Link>
            </div>
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
