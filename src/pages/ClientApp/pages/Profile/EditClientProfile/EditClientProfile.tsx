import { Button } from "../../../../../components/Button/Button";
import { ButtonTransparent } from "../../../../../components/ButtonTransparent/ButtonTransparent";
import { Checkbox } from "../../../../../components/Checkbox/Checkbox";
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
import { useUserStore } from "../../../../../stores/userStore";
import styles from "./EditClientProfile.module.css";

export function EditClientProfile() {
  const { logout, user } = useUserStore();

  const { navigate, homepage } = useAppNavigation();

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    homepage();
  };

  return (
    <div className={`wrapper ${styles.editClientProfile}`}>
      {/* Header */}
      <header className={styles.editClientProfile__header}>
        <button
          className={styles.editClientProfile__backButton}
          onClick={() => navigate("/client-profile")}
          aria-label="Back to profile"
        >
          <img src="/arrows&location/arrow-left.png" alt="Back to profile" />
        </button>
        <h2 className={styles.editClientProfile__title}>Konto bearbeiten</h2>
        <button
          className={styles.editClientProfile__notificationButton}
          aria-label="Notifications"
        >
          <img src="/icons/bell-icon.png" alt="Notifications" />
        </button>
      </header>

      {/* Profile Picture */}
      <div
        className={`border-bottom ${styles.editClientProfile__imgContainer}`}
      >
        <img src="/anna.png" alt="Users's profile" />
        <span className={styles.editClientProfile__editText}>EDIT</span>
      </div>

      {/* Profile Fields */}
      <div className={styles.editClientProfile__fields}>
        <div className={`border-bottom ${styles.editClientProfile__field}`}>
          <div className={styles.editClientProfile__info}>
            <p>
              Full Name <span>*</span>
            </p>
            <p className={styles.editClientProfile__userInfo}>{user.fullname}</p>
          </div>
          <button
            className={styles.editClientProfile__editButton}
            aria-label="Edit Full Name"
          >
            Edit
          </button>
        </div>
        <div className={`border-bottom ${styles.editClientProfile__field}`}>
          <div className={styles.editClientProfile__info}>
            <p>
              Email Address <span>*</span>
            </p>
            <p className={styles.editClientProfile__userInfo}>
              {user.email}
            </p>
            <p className={styles.editClientProfile__verifyEmail}>
              Verify email address
            </p>
          </div>
          <button
            className={styles.editClientProfile__editButton}
            aria-label="Edit Email"
          >
            Edit
          </button>
        </div>
        <div className={`border-bottom ${styles.editClientProfile__field}`}>
          <div className={styles.editClientProfile__info}>
            <p>Location</p>
            <p className={styles.editClientProfile__userInfo}>
              {user.location}
            </p>
          </div>
          <button
            className={styles.editClientProfile__editButton}
            aria-label="Edit Location"
          >
            Edit
          </button>
        </div>
        <div className={`border-bottom ${styles.editClientProfile__field}`}>
          <div className={styles.editClientProfile__info}>
            <p>Phone Number</p>
            <p className={styles.editClientProfile__userInfo}>
              {user.phone}
            </p>
          </div>
          <button
            className={styles.editClientProfile__editButton}
            aria-label="Edit Phone Number"
          >
            Edit
          </button>
        </div>

        <div className={`border-bottom ${styles.editClientProfile__field}`}>
          <div className={styles.editClientProfile__info}>
            <p>Password</p>
            <p className={styles.editClientProfile__userInfo}>
              ****************
            </p>
          </div>
          <button
            className={styles.editClientProfile__editButton}
            aria-label="Change Password"
          >
            Change
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className={styles.editClientProfile__notificationOption}>
        <Checkbox id="notify-email">Notify via email</Checkbox>
        <p>Get notified via email when something happens</p>
      </div>
      <div className={styles.editClientProfile__notificationOption}>
        <Checkbox id="notify-sms">Notify via SMS</Checkbox>
        <p>Get notified via SMS when something happens</p>
      </div>

      {/* Buttons Container */}
      <div className={styles.editClientProfile__formActions}>
        <ButtonTransparent width="100%">Cancel</ButtonTransparent>
        <Button>Save Changes</Button>
      </div>
      <div className={styles.editClientProfile__accountActions}>
        <button
          className={styles.editClientProfile__logoutBtn}
          onClick={handleLogout}
        >
          Logout <img src="/icons/logout-icon.png" alt="Log out" />
        </button>
        <button className={styles.editClientProfile__deleteBtn}>
          Delete your account
        </button>
      </div>
    </div>
  );
}
