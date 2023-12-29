import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="logo" height={50} width={50} />
          <h1 className={styles.logoText}>Parikshit</h1>
        </div>
        <p className={styles.desc}>
          Copyright &#169; All rights reserved | ParikshitGehlaut.com
        </p>
        <div className={styles.icons}>
          <Link href="https://www.instagram.com/parikshitgehlaut/">
            {" "}
            <Image src="/instagram.webp" alt="" height={25} width={25} />
          </Link>
          <Link href="https://www.instagram.com/parikshitgehlaut/">
            {" "}
            <Image src="/facebook.webp" alt="" height={25} width={25} />
          </Link>
          <Link href="https://twitter.com/I_AM_PARIKSHIT">
            {" "}
            <Image src="/twitter.webp" alt="" height={25} width={25} />
          </Link>
          <Link href="https://www.linkedin.com/in/parikshit-gehlaut-612b1825b/">
            {" "}
            <Image src="/linkedin.webp" alt="" height={25} width={25} />
          </Link>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/project">Projects</Link>
          <Link href="/contact">Contact Me</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">React.Js</Link>
          <Link href="/">Next.Js</Link>
          <Link href="/">Django</Link>
          <Link href="/">Tailwind</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="https://www.instagram.com/parikshitgehlaut/">
            Instagram
          </Link>
          <Link href="https://www.linkedin.com/in/parikshit-gehlaut-612b1825b/">
            Linkedin
          </Link>
          <Link href="https://twitter.com/I_AM_PARIKSHIT">Twitter</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
