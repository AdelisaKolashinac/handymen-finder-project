import styles from "./Footer.module.css";
import { useAppNavigation } from "../../hooks/useAppNavigation";

export function Footer() {
  const { signup } = useAppNavigation();

  return (
    <footer className={`wrapper ${styles.footer}`}>
      <div className={styles.footer__logo} onClick={signup}>
        <img
          src="/homepage/company-logo.png"
          alt="Mein Handwerker Company Logo"
          className={styles.footerLogoImg}
        />
        <h5 className={styles.footer__logoText}>Mein Handwerker</h5>
      </div>
      <div className={styles.footer__info}>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
        <p>Lorem</p>
      </div>
      <div className={styles.footer__socialMedia}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className={styles.footer_socialMediaLink}
        >
          <img
            src="/socialMediaIcons/Facebook.svg"
            alt="Facebook icon"
            className={styles.footer_socialMediaIcon}
          />
        </a>
        <a
          href="https://x.com/"
          target="_blank"
          className={styles.footer_socialMediaLink}
        >
          <img
            src="/socialMediaIcons/Twitter.svg"
            alt="Twitter icon"
            className={styles.footer_socialMediaIcon}
          />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className={styles.footer_socialMediaLink}
        >
          <img
            src="/socialMediaIcons/Instagram.svg"
            alt="Instagram icon"
            className={styles.footer_socialMediaIcon}
          />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          className={styles.footer_socialMediaLink}
        >
          <img
            src="/socialMediaIcons/LinkedIn.svg"
            alt="LinkedIn icon"
            className={styles.footer_socialMediaIcon}
          />
        </a>
      </div>
      <p className={styles.footer__copyright}>
        Copyright © 2024 Mein Hausmaister All Rights Reserved
      </p>
    </footer>
  );
}
