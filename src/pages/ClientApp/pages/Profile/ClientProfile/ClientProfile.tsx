import styles from "./ClientProfile.module.css";

export function ClientProfile() {
  return (
    <div className={styles.clientProfile}>
      <div className={styles.clientProfileContent}>
        <div className={styles.imageSection}>
          <img src="/findAHandyman/anna.png" alt="Picture of user" />
          <span className={styles.userRole}>client</span>
        </div>

        <div className={styles.detailsSection}>
          <p className={styles.userName}>Anna Müller</p>
          <p className={styles.userEmail}>annamuller@yahoo.com</p>
          <div className={styles.location}>
            <img src="/location.png" alt="Location icon" />
            <p className={styles.city}>Ingolstadt</p>
          </div>
          <div className={styles.contactInfo}>
            <img src="/phone-icon.png" alt="Phone icon" />
            <p className={styles.phone}>+41 987 *** ***</p>
          </div>
        </div>
      </div>
      <div>
        <img src="edit-icon.png" alt="Edit icon" />
      </div>
    </div>
  );
}
