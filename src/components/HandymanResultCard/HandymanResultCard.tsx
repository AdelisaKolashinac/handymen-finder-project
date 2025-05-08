import { HandymanType } from "../../types/types";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";
import styles from "./HandymanResultCard.module.css";

interface Props {
  resultCard: HandymanType;
  averageRating: number;
}

export function HandymanResultCard({ resultCard, averageRating }: Props) {
  return (
    <div className={`border-bottom ${styles.handymanResultCard}`}>
      <div className={styles.handymanResultCard__header}>
        <div className={styles.handymanResultCard__details}>
          <img
            src={resultCard.img}
            alt={resultCard.name}
            className={styles.handymanResultCard__image}
          />
          <div>
            <p className={styles.handymanResultCard__name}>{resultCard.name}</p>
            <div className={styles.handymanResultCard__location}>
              <img src="/arrows&location/location.png" alt="Location Icon" />
              <p className={styles.handymanResultCard__locationText}>
                {resultCard.location}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.handymanResultCard__availability}>
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
      <div className={styles.handymanResultCard__rating}>
        <div className={styles.handymanResultCard__ratingText}>
          <img src="/star.svg" alt="Star Icon" />
          <p>{averageRating.toFixed(1)}</p>{" "}
        </div>
        <span className={styles.handymanResultCard__reviewsCount}>
          {resultCard.reviews.length} reviews
        </span>
      </div>
      <div className={styles.handymanResultCard__categories}>
        {resultCard.categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
      </div>
      <p className={styles.handymanResultCard__description}>
        {resultCard.description}
      </p>
      <div className={styles.handymanResultCard__actions}>
        <button className={styles.handymanResultCard__button}>
          Show profile
        </button>
        <ButtonSmall>Contact</ButtonSmall>
      </div>
    </div>
  );
}
