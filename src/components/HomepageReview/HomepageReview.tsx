import { ReviewCard } from "../../types/types";
import styles from "./HomepageReview.module.css";

interface Props {
  review: ReviewCard;
}

export function HomepageReview({ review }: Props) {
  const { name, avatar, city, rating, description, images } = review;

  return (
    <div className={styles.reviewCard}>
      <div className={styles.header}>
        <img className={styles.avatar} src={avatar} alt={name} />
        <div className={styles.userInfo}>
          <p className={styles.name}>{name}</p>
          <p className={styles.city}>{city}</p>
        </div>
      </div>

      <div className={styles.rating}>
        {Array.from({ length: rating }, (_, i) => (
          <img key={i} src="/star.svg" alt="star icon" className="star" />
        ))}
      </div>

      <p className={styles.description}>{description}</p>

      <div className={styles.imageGallery}>
        {images.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt={img.alt || "Review image"}
            className={styles.reviewImage}
          />
        ))}
      </div>
    </div>
  );
}
