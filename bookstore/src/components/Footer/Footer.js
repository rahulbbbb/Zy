import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.col} ${styles.col3}`}>
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className={`${styles.col} ${styles.col3}`}>
            <h2>Policies</h2>
            <ul>
              <li>
                <a href="#">Privacy Policies</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Secure Shopping</a>
              </li>
              <li>
                <a href="#">Copyright Policy</a>
              </li>
            </ul>
          </div>
          <div className={`${styles.col} ${styles.col3}`}>
            <h2>Help</h2>
            <ul>
              <li>
                <a href="#">Payment</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Return</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className={`${styles.col} ${styles.col3}`}>
            <h2 className={styles.follow}>Follow Us</h2>
            <div className={styles.socialIcons}>
              <div className={styles.icon}>
                <i className={`${styles.fontawesomeStyle} fab fa-instagram`} />
              </div>
              <div className={styles.icon}>
                <i className={`${styles.fontawesomeStyle} fab fa-facebook`} />
              </div>
              <div className={styles.icon}>
                <i className={`${styles.fontawesomeStyle} fab fa-youtube`} />
              </div>
              <div className={styles.icon}>
                <i className={`${styles.fontawesomeStyle} fab fa-twitter`} />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.footerText}>
          <p className={styles.mainHeroPara}>
            Copyright @ 2023 U-ODYSSEY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
