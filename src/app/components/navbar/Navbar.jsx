import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import ResponsiveNav from "../responsiveNav/ResponsiveNav";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  // console.log(user);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Parikshit's Portfolio</div>
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/blog" className={styles.link}>
          Blog
        </Link>
        <Link href="/project" className={styles.link}>
          Projects
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact Me
        </Link>
        {/* <Link href="https://drive.google.com/file/d/1eq7AqEaFHR-ComeGiRW-u7Nf68CcUllC/view?usp=sharing">
          <button className={styles.btn}>Resume</button>
        </Link> */}
        {!user ? (
          <>
            <button className={styles.btn}>
              <LoginLink>Sign in</LoginLink>
            </button>
            <button className={styles.btn}>
              <RegisterLink>Sign up</RegisterLink>
            </button>
          </>
        ) : (
          <>
            {/* <span>Hello,{user.given_name}</span> */}
            <button className={styles.btn}>
              <LogoutLink>Log out</LogoutLink>
            </button>
          </>
        )}
      </div>
      <ResponsiveNav />
    </div>
  );
};

export default Navbar;
