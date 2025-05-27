import styles from "./CustomerFeedback.module.css";
import { Review } from "../../../types/types";

interface Props {
  review: Review;
}

export function CustomerFeedback({ review }: Props) {
  return (
    <div className={styles.CustomerFeedback}>
      <div className={styles.CustomerFeedback__header}>
        <div className={styles.CustomerFeedback__userInfo}>
          {/* <img className={styles.CustomerFeedback__avatar} src={} alt={} /> */}
          <p className={styles.CustomerFeedback__name}>{review.reviewer}</p>
        </div>
        <p className={styles.CustomerFeedback__city}>{}</p>
      </div>

      <div className={styles.CustomerFeedback__rating}>
        {Array.from({ length: review.rating }, (_, i) => (
          <img key={i} src="/star.svg" alt="star icon" className="star" />
        ))}
      </div>

      <p className={styles.CustomerFeedback__description}>{review.comment}</p>
    </div>
  );
}
