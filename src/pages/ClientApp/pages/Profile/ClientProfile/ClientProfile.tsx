import { useEffect } from "react";
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
import { useUserStore } from "../../../../../stores/userStore";
import styles from "./ClientProfile.module.css";

export function ClientProfile() {
  const user = useUserStore((state) => state.user);
  const { navigate, homepage } = useAppNavigation();

  useEffect(() => {
    if (!user) {
      homepage();
    }
  }, [user, homepage]);

  if (!user) {
    return null;
  }
  
  return (
    <div className={styles.clientProfile}>
      <div className={styles.clientProfile__content}>
        <div className={styles.clientProfile__imageContainer}>
          <img src="/anna.png" alt="Picture of user" />
          <span className={styles.clientProfile__userRole}>client</span>
        </div>

        <div className={styles.clientProfile__detailsSection}>
          <p className={styles.clientProfile__userName}>{user.fullname}</p>
          <p className={styles.clientProfile__userEmail}>{user.email}</p>
          <div className={styles.clientProfile__location}>
            <img src="/arrows&location/location.png" alt="Location of use" />
            <p className={styles.city}>{user.location}</p>
          </div>
          <div className={styles.clientProfile__contactInfo}>
            <img src="/icons/phone-icon.png" alt="Phone number of user" />
            <p className={styles.clientProfile__phone}>{user.phone}</p>
          </div>
        </div>
      </div>
      <div onClick={() => navigate("/client-edit-profile")}>
        <img src="/icons/edit-icon.png" alt="Edit profile info" />
      </div>
    </div>
  );
}
