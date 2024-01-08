import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description:
    "Welcome to Parikshit Gehlaut's Portfolio.I am beginner Full Stack developer.With a passion for creating stunning, functional websites, I'm here to bring your online vision to life. Contact me today to discuss your next project",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.contactTitle}>Feel Free to contact Me</h1>
        <div className={styles.Contactimage}>
          <Image
            src="/developer.png"
            alt="contact image"
            fill
            className={styles.img}
          />
        </div>
        <div className={styles.icons}>
          <Link
            href="https://www.instagram.com/parikshitgehlaut/"
            target="_blank"
          >
            {" "}
            <Image src="/instagram.webp" alt="" height={50} width={50} />
          </Link>
          <Link href="https://medium.com/@parikshitgehlaut" target="_blank">
            {" "}
            <Image src="/medium.webp" alt="" height={50} width={50} />
          </Link>
          <Link href="https://twitter.com/I_AM_PARIKSHIT" target="_blank">
            {" "}
            <Image src="/Twitter.webp" alt="" height={50} width={50} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/parikshitgehlaut/"
            target="_blank"
          >
            {" "}
            <Image src="/linkedin.webp" alt="" height={50} width={50} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
