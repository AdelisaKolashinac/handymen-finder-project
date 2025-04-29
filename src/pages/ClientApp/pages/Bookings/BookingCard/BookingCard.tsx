import { Button } from "../../../../../components/Button/Button";
import { ButtonTransparent } from "../../../../../components/ButtonTransparent/ButtonTransparent";
import styles from "./BookingCard.module.css";

export default function BookingCard() {
  return (
    <div className={styles.bookingCard}>
      {/* Header with service and location */}
      <div className={`border-bottom ${styles.bookingCard__header}`}>
        <p className={styles.bookingCard__service}>Plumbing service</p>
        <div className={styles.bookingCard__location}>
          <img
            src="/clientApp/bookings/location-icon.png"
            alt="Location icon"
          />
          <a href="#" className={styles.bookingCard__mapLink}>
            View on map
          </a>
        </div>
      </div>

      {/* Date and time */}
      <div className={styles.bookingCardBody}>
        <div className={styles.bookingCard__datetime}>
          <div className={styles.bookingCard__date}>
            <img
              src="/clientApp/bookings/calendar-check-icon.png"
              alt="Calendar check icon"
            />
            <p className={styles.bookingCard__dateText}>Wed, 8 Nov</p>
          </div>
          <div className={styles.bookingCard__time}>
            <img src="/clientApp/bookings/clock-icon.png" alt="Clock icon" />
            <p className={styles.bookingCard__timeText}>Morning 9 am</p>
          </div>
        </div>

        {/* Task description */}
        <div className={styles.bookingCard__task}>
          <img
            src="/clientApp/bookings/arrows-clockwise-icon.png"
            alt="Arrows clockwise icon"
          />
          <p className={styles.bookingCard__taskText}>Fix a leaking pipe</p>
        </div>

        {/* Craftsman info */}
        <div className={styles.bookingCard__worker}>
          <img
            src="/clientApp/bookings/user-gear-icon.png"
            alt="User gear icon"
          />
          <p className={styles.bookingCard__workerName}>Klaus Schneider</p>
        </div>
      </div>
      <div className={styles.bookingCard__actions}>
        <ButtonTransparent width="100%">Refuse</ButtonTransparent>
        <Button>Accept</Button>
      </div>
    </div>
  );
}
