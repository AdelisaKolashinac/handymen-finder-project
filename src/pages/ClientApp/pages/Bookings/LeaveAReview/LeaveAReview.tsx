import { useState } from "react";
import { Button } from "../../../../../components/Button/Button";
import { Checkbox } from "../../../../../components/Checkbox/Checkbox";
import styles from "./LeaveAReview.module.css";
import { useBookingsContext } from "../bookingsContext/BookingsContext";
import { useNavigate, useParams } from "react-router-dom";

export function LeaveAReview() {
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const navigate = useNavigate();

  const { id: bookingId } = useParams<{ id: string }>();

  const { updateRating } = useBookingsContext();

  if (!bookingId) {
    return <p>Booking not found. Please go back and try again.</p>;
  }

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
    updateRating(bookingId, rating);
  };

  return (
    <div className="wrapper">
      {/* Header with back arrow and title */}
      <div className={styles.leaveAReview__header}>
        <div
          onClick={() => navigate("/bookings")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="/clientApp/bookings/arrow-left.png"
            alt="Back arrow to previous page"
          />
        </div>
        <h4 className={styles.leaveAReview__title}>Leave a review</h4>
      </div>
      <p className={styles.leaveAReview__subtitle}>
        Please rate the craftsman and the performance before continuing
      </p>
      <p className={styles.leaveAReview__label}>
        Rate your service with <b>Klaus Schneider</b>
      </p>

      {/* Star rating */}
      <div className={styles.leaveAReview__stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <img
            key={star}
            onClick={() => handleStarClick(star)}
            src={
              selectedRating >= star
                ? "/star.svg"
                : "/clientApp/bookings/empty-star-icon.png"
            }
            alt="Star icon for rating"
          />
        ))}
      </div>

      {/* Message input for review */}
      <div className={styles.leaveAReview__messageBox}>
        <label htmlFor="message" className={styles.leaveAReview__label_two}>
          Share your experience
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          placeholder="Enter a message"
          className={styles.leaveAReview__textarea}
        ></textarea>
      </div>
      <div className={styles.leaveAReview__photoUpload}>
        <img
          src="/clientApp/bookings/camera-icon.png"
          alt="Add photos camera icon"
        />
        <span className={styles.leaveAReview__photoText}>Add photos</span>
      </div>
      <div className={styles.leaveAReview__checkbox}>
        <Checkbox id="published">
          I agree that my assessment is published
        </Checkbox>
      </div>
      <Button>Send evaluation</Button>
    </div>
  );
}
