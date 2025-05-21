import { Link, useParams } from "react-router-dom";
import styles from "./EnterLocation.module.css";

export default function EnterLocation() {
  const { id } = useParams();

  return (
    <section className={`wrapper ${styles.EnterLocation}`}>
      <header className={styles.EnterLocation__header}>
        <Link
          to={`/booking-details/${id}`}
          className={styles.EnterLocation__backButton}
        >
          <img src="/arrows&location/arrow-left.png" alt="Go back" />
          <span>Enter your location</span>
        </Link>
      </header>
      <div className={`border-bottom ${styles.EnterLocation__searchBar}`}>
        <input
          type="search"
          name="location"
          placeholder="Search"
          className={styles.EnterLocation__input}
        />
        <div className={styles.EnterLocation__useCurrent}>
          <img
            src="/arrows&location/enter-location-icon.png"
            alt="Enter location"
          />
          <p>Use your current location</p>
        </div>
      </div>
      <label className={styles.EnterLocation__resultLabel}>Search result</label>
      <div className={styles.EnterLocation__resultItem}>
        <img
          src="/arrows&location/enter-location-icon.png"
          alt="Enter location"
        />
        <p>Max Mustermannmusterstraße 12, 12345 Muststadt</p>
      </div>
    </section>
  );
}
