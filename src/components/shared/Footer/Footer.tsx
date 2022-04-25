import React from "react";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <a href="https://newline.co">NewLine</a>
      <br />
      {currentYear}
    </footer>
  );
}
