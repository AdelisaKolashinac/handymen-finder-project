import styles from "../SignupAsUser.module.css";

export function LogoHeader() {
  return (
    <div className={styles.logoWrapper}>
      <img
        src="/signupAsUser/company-logo-big.png"
        alt="Large company logo for user signup"
        className={styles.logoImage}
      />
    </div>
  );
}
