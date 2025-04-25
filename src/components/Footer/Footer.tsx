import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.footerLogo}>
          <img
            src="/homepage/company-logo.png"
            alt="Mein Handwerker Company Logo"
            className={styles.footerLogoImg}
          />
          <h5 className={styles.footerLogoText}>Mein Handwerker</h5>
        </div>
        <div className={styles.footerInfo}>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>
        <div className={styles.footerSocialMedia}>
          <a href="#" className={styles.footerSocialMediaLink}>
            <img
              src="/socialMediaIcons/Facebook.svg"
              alt="Facebook icon"
              className={styles.footerSocialMediaIcon}
            />
          </a>
          <a href="#" className={styles.footerSocialMediaLink}>
            <img
              src="/socialMediaIcons/Twitter.svg"
              alt="Twitter icon"
              className={styles.footerSocialMediaIcon}
            />
          </a>
          <a href="#" className={styles.footerSocialMediaLink}>
            <img
              src="/socialMediaIcons/Instagram.svg"
              alt="Instagram icon"
              className={styles.footerSocialMediaIcon}
            />
          </a>
          <a href="#" className={styles.footerSocialMediaLink}>
            <img
              src="/socialMediaIcons/LinkedIn.svg"
              alt="LinkedIn icon"
              className={styles.footerSocialMediaIcon}
            />
          </a>
        </div>
        <p className={styles.footerCopyright}>
          Copyright © 2024 Mein Hausmaister All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
