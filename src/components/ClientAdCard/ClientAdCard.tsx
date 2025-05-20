import { useUserStore } from "../../stores/userStore";
import { Ad } from "../../types/types";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";
import styles from "./ClientAdCard.module.css";
import { formatDistanceToNow } from "date-fns";

interface Props {
  card: Ad;
}

export function ClientAdCard({ card }: Props) {
  const user = useUserStore((state) => state.user);

  if (!user) return null;

  return (
    <div className={styles.clientAdCard}>
      <div className={styles.clientAdCard__header}>
        <div className={styles.clientAdCard__user}>
          <img
            src="/anna.png"
            alt="user image"
            className={styles.clientAdCard__userImage}
          />
          <div className={styles.clientAdCard__userInfo}>
            <p className={styles.clientAdCard__userName}>{user.fullname}</p>
            <p className={styles.clientAdCard__userTag}>{card.tag}</p>
          </div>
        </div>
        <div className={styles.clientAdCard__urgency}>
          <span
            className={`${
              card.urgency === "immediate"
                ? styles.immediateTag
                : styles.flexibleTag
            }`}
          >
            {card.urgency}
          </span>
          <img src="/icons/bookmark.png" alt="Bookmark icon" />
        </div>
      </div>
      <div className={`border-bottom ${styles.clientAdCard__title_date}`}>
        <p className={styles.clientAdCard__title}>{card.service}</p>
        <p className={styles.clientAdCard__date}>
          {formatDistanceToNow(new Date(card.createdAt), { addSuffix: true })}
        </p>
      </div>
      <p className={styles.clientAdCard__description}>{card.description}</p>

      {/* Address + Map Link */}
      <img src="/arrows&location/location.png" alt="Location Icon" />
      <span className={styles.clientAdCard__location}>{card.location}</span>

      <div className={`border-bottom ${styles.clientAdCard__address}`}>
        <span>address</span>
        <a href="#">Show on the map</a>
      </div>

      {card.imageGallery && (
        <div className={`border-bottom ${styles.clientAdCard__imageGallery}`}>
          {card.imageGallery.map((img) => (
            <img key={img.id} src={img.base64} alt="Image of reparation" />
          ))}
        </div>
      )}

      {/* Contact Button */}
      <div className={styles.clientAdCard__buttonContainer}>
        <ButtonSmall>Contact</ButtonSmall>
      </div>
      <div className={styles.clientAdCard__arrow}>
        <img src="/arrows&location/arrow-down.png" alt="Arrow down" />
      </div>
    </div>
  );
}
