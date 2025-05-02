import { Checkbox } from "../../../../../components/Checkbox/Checkbox";
import styles from "./EditClientProfile.module.css";

export function EditClientProfile() {
  return (
    <div className={styles.editClientProfile}>
      {/* Header */}
      <header className={styles.header}>
        <button className={styles.backButton} aria-label="Back to profile">
          <img src="/arrow-left.png" alt="Back to profile" />
        </button>
        <h2 className={styles.title}>Konto bearbeiten</h2>
        <button
          className={styles.notificationButton}
          aria-label="Notifications"
        >
          <img src="/bell-icon.png" alt="Notifications" />
        </button>
      </header>

      {/* Profile Picture */}
      <div className={styles.profilePictureSection}>
        <img
          src="/findAHandyman/anna.png"
          alt="Anna Müller's profile"
          className={styles.profileImage}
        />
        <span className={styles.editPicture}>EDIT</span>
      </div>

      {/* Profile Fields */}
      <div className={styles.profileFields}>
        <div className={styles.profileField}>
          <div className={styles.profileField__info}>
            <p>
              Full Name <span>*</span>
            </p>
            <p>Anna Müller</p>
          </div>
          <button className={styles.editButton} aria-label="Edit Full Name">
            Edit
          </button>
        </div>
        <div className={styles.profileField}>
          <div className={styles.profileField__info}>
            <p>
              Email Address <span>*</span>
            </p>
            <p>annamuller@yahoo.com</p>
            <p className={styles.verifyEmail}>Verify email address</p>
          </div>
          <button className={styles.editButton} aria-label="Edit Email">
            Edit
          </button>
        </div>
        <div className={styles.profileField}>
          <div className={styles.profileField__info}>
            <p>Location</p>
            <p>No location entered yet</p>
          </div>
          <button className={styles.editButton} aria-label="Edit Location">
            Edit
          </button>
        </div>
        <div className={styles.profileField}>
          <div className={styles.profileField__info}>
            <p>Phone Number</p>
            <p>No phone number entered yet</p>
          </div>
          <button className={styles.editButton} aria-label="Edit Phone Number">
            Edit
          </button>
        </div>

        <div className={styles.profileField}>
          <div className={styles.profileField__info}>
            <p>Password</p>
            <p>****************</p>
          </div>
          <button className={styles.editButton} aria-label="Change Password">
            Change
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className={styles.notificationOption}>
        <Checkbox id="notify-email">Notify via email</Checkbox>
        <p>Get notified via email when something happens</p>
      </div>
      <div className={styles.notificationOption}>
        <Checkbox id="notify-sms">Notify via SMS</Checkbox>
        <p>Get notified via SMS when something happens</p>
      </div>
    </div>
  );
}
