import { HomepageReview } from "../../../components/HomepageReview/HomepageReview";
import styles from "./HomepageReviews.module.css";
import { customerReviews } from "../homepageData";

export function HomepageReviews() {
  return (
    <section className={styles.reviewsSection}>
      <div className={styles.reviewsWrapper}>
        <img
          src="./homepage/reviews/vector.png"
          alt="Icon"
          className={styles.reviewsIcon}
        />
        <h2 className="title-h2">Echte Erfahrungen, echte Ergebnisse</h2>
        <p className={styles.reviewsText}>
          Erfahren Sie, wie unsere App Reparaturen und Verbesserungen für
          Menschen wie Sie erleichtert.
        </p>
        {customerReviews.map((review) => (
          <HomepageReview key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
