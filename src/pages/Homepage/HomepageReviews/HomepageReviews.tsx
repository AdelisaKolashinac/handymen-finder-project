import { HomepageReview } from "../../../components/HomepageReview/HomepageReview";
import { customerReviews } from "../../../data/data";
import styles from "./HomepageReviews.module.css";

export function HomepageReviews() {
  return (
    <section className={styles.reviewsSection}>
      <div className={styles.reviewsSection__wrapper}>
        <img
          src="./homepage/vector.png"
          alt="Icon"
          className={styles.reviewsSection__icon}
        />
        <h2 className="title-h2">Echte Erfahrungen, echte Ergebnisse</h2>
        <p className={styles.reviewsSection__subtitle}>
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
