import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/Button/Button";
import { ButtonTransparent } from "../../../../../components/ButtonTransparent/ButtonTransparent";
import styles from "./BookingCard.module.css";
import { Booking, Handyman } from "../../../../../types/types";

interface BookingCardProps {
  handyman: Handyman;
  booking: Booking;
  onAccept: () => Promise<void>;
  onRefuse: () => Promise<void>;
}

export default function BookingCard({
  booking,
  handyman,
  onAccept,
  onRefuse,
}: BookingCardProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const justCompleted = location.state?.justCompleted;
  const rating = justCompleted?.rating;

  const actualBooking =
    justCompleted && justCompleted.id === booking.id
      ? { ...booking, status: "completed" }
      : booking;

  return (
    <div
      className={`${styles.bookingCard} ${
        actualBooking.status === "completed" ? styles.completed : ""
      }`}
    >
      {/* Header with service and location */}
      <div className={`border-bottom ${styles.bookingCard__header}`}>
        <p className={styles.bookingCard__service}>{booking.service}</p>
        {actualBooking.status === "completed" ? (
          <div className={styles.bookingCard__rating}>
            <img
              src="/clientApp/bookings/orange-star-icon.png"
              alt="Star icon"
            />
            <p className={styles.bookingCard__ratingText}>
              You rated {rating}/5
            </p>
            <img
              src="/clientApp/bookings/completed-icon.png"
              alt="Completed icon"
            />
          </div>
        ) : (
          <div className={styles.bookingCard__location}>
            <img
              src="/clientApp/bookings/location-icon.png"
              alt="Location icon"
            />
            <a href={booking.location} className={styles.bookingCard__mapLink}>
              View on map
            </a>
          </div>
        )}
      </div>

      {/* Date and time */}
      <div className={styles.bookingCardBody}>
        <div className={styles.bookingCard__datetime}>
          <div className={styles.bookingCard__date}>
            <img
              src="/clientApp/bookings/calendar-check-icon.png"
              alt="Calendar check icon"
            />
            <p className={styles.bookingCard__dateText}>{booking.date}</p>
          </div>
          <div className={styles.bookingCard__time}>
            <img src="/clientApp/bookings/clock-icon.png" alt="Clock icon" />
            <p className={styles.bookingCard__timeText}>{booking.time}</p>
          </div>
        </div>

        {/* Task description */}
        <div className={styles.bookingCard__task}>
          <img
            src="/clientApp/bookings/arrows-clockwise-icon.png"
            alt="Arrows clockwise icon"
          />
          <p className={styles.bookingCard__taskText}>{booking.message}</p>
        </div>

        {/* Craftsman info */}
        <div className={styles.bookingCard__worker}>
          <img
            src="/clientApp/bookings/user-gear-icon.png"
            alt="User gear icon"
          />
          <p className={styles.bookingCard__workerName}>{handyman.name}</p>
        </div>
      </div>
      <div className={styles.bookingCard__actions}>
        {actualBooking.status === "new" && (
          <>
            <ButtonTransparent width="100%" onClick={onRefuse}>
              Refuse
            </ButtonTransparent>
            <Button onClick={onAccept}>Accept</Button>
          </>
        )}
        {actualBooking.status === "ongoing" && (
          <>
            <ButtonTransparent width="100%">Chat now</ButtonTransparent>
            <Button
              onClick={() =>
                navigate("/leave-review", {
                  state: {
                    booking,
                  },
                })
              }
            >
              Completed
            </Button>
          </>
        )}

        {actualBooking.status === "completed" && (
          <>
            <ButtonTransparent width="100%">Chat now</ButtonTransparent>
            <Button>Reopen</Button>
          </>
        )}
      </div>
    </div>
  );
}
