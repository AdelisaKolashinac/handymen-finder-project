import { ButtonSmall } from "../../../../components/ButtonSmall/ButtonSmall";
import { RecommendedCardType } from "../../pages/Home/homeData";
import styles from "./RecommendedCard.module.css";

interface Props {
  card: RecommendedCardType;
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
              <img src="/blue-check-icon.png" alt="Blue check icon" />
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
          <img src="/bookmark.png" alt="Bookmark icon" />
        </div>
      </div>

      <div className={`border-bottom ${styles.recommendedCard__jobInfo}`}>
        <p>{card.jobTitle}</p>
        <span>{card.postedAt}</span>
      </div>
      <p className={styles.recommendedCard__description}>{card.description}</p>
      <div className={styles.recommendedCard__location}>
        <img src="/location.png" alt="Location Icon" />
        <p>Berlin, Germany</p>
      </div>
      <div className={styles.recommendedCard__imageGallery}>
        {card.images.map((img) => (
          <img key={img.id} src={img.url} alt={img.alt || "Review image"} />
        ))}
      </div>
      <div className={styles.recommendedCard__actions}>
        <button className={styles.recommendedCard__button}>Show profile</button>
        <ButtonSmall>Contact</ButtonSmall>
      </div>
    </div>
  );
}
