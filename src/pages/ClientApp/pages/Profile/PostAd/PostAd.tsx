import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
import styles from "./PostAd.module.css";

export function PostAd() {
  const { navigate } = useAppNavigation();

  return (
    <div className={`wrapper ${styles.postAd}`}>
      <header className={styles.postAd__header}>
        <button
          className={styles.postAd__backButton}
          onClick={() => navigate("/client-profile")}
          aria-label="Back to profile"
        >
          <img src="/arrows&location/arrow-left.png" alt="Back to profile" />
        </button>
        <h2 className={styles.postAd__title}>Stelle ausschreiben</h2>
        <button
          className={styles.postAd__notificationButton}
          aria-label="Notifications"
        >
          <img src="/icons/bell-icon.png" alt="Notifications" />
        </button>
      </header>
      <p>
        Füllen Sie alle erforderlichen Felder aus, um eine Stelle
        auszuschreiben.
      </p>
      <form>
        <div>
          <label htmlFor="">
            Welche Dienstleistung benötigen Sie? <span>*</span>
          </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Beschreibung:</label>
          <textarea name="" id=""></textarea>
        </div>
        <div>
          <label htmlFor="">
            Standort: <span>*</span>
          </label>
          <input type="text" placeholder="Gib deine Adresse ein" />
        </div>
        <div>
          <label htmlFor="">
            Fotos hochladen: <span>*</span>
          </label>
          <textarea name="" id=""></textarea>
        </div>
      </form>
    </div>
  );
}
