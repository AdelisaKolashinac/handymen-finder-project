import { ButtonSmall } from "../../../../components/ButtonSmall/ButtonSmall";
import { HandymanType } from "../../../../types/types";
import styles from "./RecommendedCard.module.css";

interface Props {
  card: HandymanType;
  averageRating: number;
}

export function RecommendedCard({ card, averageRating }: Props) {
  return (
    <div className={`border-bottom ${styles.recommendedCard}`}>
      <div className={styles.recommendedCard__header}>
        <div className={styles.recommendedCard__details}>
          <img
            src={card.img}
            alt={card.name}
            className={styles.recommendedCard__image}
          />
          <div>
            <div className={styles.recommendedCard__name}>
              <p className={styles.recommendedCard__nameText}>{card.name}</p>
              <img src="/icons/blue-check-icon.png" alt="Blue check icon" />
            </div>
            <div className={styles.recommendedCard__rating}>
              <div className={styles.recommendedCard__ratingText}>
                <img src="/star.svg" alt="Star Icon" />
                <p>{averageRating.toFixed(1)}</p>{" "}
              </div>
              <span className={styles.recommendedCard__reviewsCount}>
                {card.reviews.length} reviews
              </span>
            </div>
          </div>
        </div>
        <div className={styles.recommendedCard__availability}>
          {card.available ? (
            <span>Now available</span>
          ) : (
            <span>Not available</span>
          )}
          <img src="/icons/bookmark.png" alt="Bookmark icon" />
        </div>
      </div>

      <div className={`border-bottom ${styles.recommendedCard__jobInfo}`}>
        <p className={styles.recommendedCard__jobText}>{card.jobTitle}</p>
        <p className={styles.recommendedCard__posted}>{card.postedAt}</p>
      </div>
      <p className={styles.recommendedCard__description}>{card.description}</p>
      <div className={styles.recommendedCard__location}>
        <img src="/arrows&location/location.png" alt="Location Icon" />
        <p>Berlin, Germany</p>
      </div>
      <div className={styles.recommendedCard__imageGallery}>
        {card.imageGallery?.map((img) => (
          <img key={img.id} src={img.src} alt={img.alt || "Review image"} />
        ))}
      </div>
      <div className={styles.recommendedCard__actions}>
        <button className={styles.recommendedCard__button}>Show profile</button>
        <ButtonSmall>Contact</ButtonSmall>
      </div>
    </div>
  );
}
