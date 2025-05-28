import styles from "./BookHandymanCard.module.css";
import { Handyman } from "../../../types/types";

interface Props {
  resultCard: Handyman;
  averageRating: number;
  reviewsCount: number;
}

export function BookHandymanCard({
  resultCard,
  averageRating,
  reviewsCount,
}: Props) {
  return (
    <div className={styles.BookHandymanCard}>
      <div className={styles.BookHandymanCard__header}>
        <div className={styles.BookHandymanCard__details}>
          <img
            src={resultCard.img}
            alt={resultCard.name}
            className={styles.BookHandymanCard__image}
          />
          <div>
            <p className={styles.BookHandymanCard__name}>{resultCard.name}</p>
            <div className={styles.BookHandymanCard__location}>
              <img src="/arrows&location/location.png" alt="Location Icon" />
              <p className={styles.BookHandymanCard__locationText}>
                {resultCard.location}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.BookHandymanCard__availability}>
          <span
            className={
              resultCard.available === "available"
                ? styles.available
                : styles.notAvailable
            }
          >
            {resultCard.available}
          </span>
        </div>
      </div>
      <div className={styles.BookHandymanCard__rating}>
        <div className={styles.BookHandymanCard__ratingText}>
          <img src="/star.svg" alt="Star Icon" />
          <p>{averageRating.toFixed(1)}</p>{" "}
        </div>
        <span className={styles.BookHandymanCard__reviewsCount}>
          {reviewsCount} reviews
        </span>
      </div>
    </div>
  );
}
