import { Link, useNavigate } from "react-router-dom";
import { ButtonSmall } from "../../../../components/ButtonSmall/ButtonSmall";
import { Handyman } from "../../../../types/types";
import styles from "./RecommendedCard.module.css";
import { useUserStore } from "../../../../stores/userStore";
import { createOrGetChat } from "../../../../utils/chatUtils";

interface Props {
  card: Handyman;
  averageRating: number;
  reviewsCount: number;
}

export function RecommendedCard({ card, averageRating, reviewsCount }: Props) {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  const handleContactClick = async () => {
    if (!user) {
      return;
    }
    try {
      const chatId = await createOrGetChat(user, card);
      navigate(`/chat/${chatId}`);
    } catch (error) {
      console.error("Error creating/getting chat:", error);
    }
  };
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
                {reviewsCount} reviews
              </span>
            </div>
          </div>
        </div>
        <div className={styles.recommendedCard__availability}>
          <span
            className={
              card.available === "available"
                ? styles.available
                : styles.notAvailable
            }
          >
            {card.available}
          </span>
          <img src="/icons/bookmark.png" alt="Bookmark icon" />
        </div>
      </div>

      <div className={`border-bottom ${styles.recommendedCard__jobInfo}`}>
        <p className={styles.recommendedCard__jobText}>{card.jobTitle}</p>
        <p className={styles.recommendedCard__posted}>{card.createdAt}</p>
      </div>
      <p className={styles.recommendedCard__description}>{card.description}</p>
      <div className={styles.recommendedCard__location}>
        <img src="/arrows&location/location.png" alt="Location Icon" />
        <p>{card.location}</p>
      </div>
      <div className={styles.recommendedCard__imageGallery}>
        {card.imageGallery?.map((img) => (
          <img key={img.id} src={img.src} alt={img.alt || "Review image"} />
        ))}
      </div>
      <div className={styles.recommendedCard__actions}>
        <Link
          to={`/handyman-public-profile/${card.id}`}
          className={styles.recommendedCard__showProfile}
        >
          Show profile
        </Link>
        <ButtonSmall onClick={handleContactClick}>Contact</ButtonSmall>
      </div>
    </div>
  );
}
