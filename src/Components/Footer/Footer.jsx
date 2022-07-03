import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div>
      <div className={styles.mian_container}>
        <div className={styles.query}>
          Questions? Call{" "}
          <span className={styles.number}>000-800-040-1843</span>{" "}
        </div>
        <div className={styles.flex_container}>
          <div>
            <ul className={styles.info}>
              <li className={styles.litag}>FAQ</li>
              <li className={styles.litag}>Investor Relations</li>
              <li className={styles.litag}>Privacy</li>
              <li className={styles.litag}>Speed Test</li>
            </ul>
          </div>
          <div>
            <ul className={styles.info}>
              <li className={styles.litag}>Help Centre</li>
              <li className={styles.litag}>Jobs </li>
              <li className={styles.litag}>Cookie Preferences</li>
              <li className={styles.litag}>Legal Notices </li>
            </ul>
          </div>
          <div>
            <ul className={styles.info}>
              <li className={styles.litag}>Account</li>
              <li className={styles.litag}>Ways to Watch </li>
              <li className={styles.litag}>Corporate Information</li>
              <li className={styles.litag}>Only on Netflix </li>
            </ul>
          </div>
          <div>
            <ul className={styles.info}>
              <li className={styles.litag}>Media Centre</li>
              <li className={styles.litag}>Terms of Use</li>
              <li className={styles.litag}>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
