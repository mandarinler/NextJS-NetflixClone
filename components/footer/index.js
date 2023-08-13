import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://twitter.com/SamedHaciyev2" target="_blank">
        Hajiyev Samad
      </Link>
    </footer>
  );
}

export { Footer };