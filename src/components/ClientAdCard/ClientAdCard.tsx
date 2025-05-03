import { ActiveAdType } from "../../pages/ClientApp/pages/Profile/profileData";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";
import styles from "./ClientAdCard.module.css";

interface Props {
  card: ActiveAdType;
}

export function ClientAdCard({ card }: Props) {
  return (
    <div className={styles.clientAdCard}>
      <div className={styles.clientAdCard__header}>
        <div className={styles.clientAdCard__user}>
          <img
            src={card.img}
            alt={card.name}
            className={styles.clientAdCard__userImage}
          />
          <div className={styles.clientAdCard__userInfo}>
            <p className={styles.clientAdCard__userName}>{card.name}</p>
            <p className={styles.clientAdCard__userTag}>{card.tag}</p>
          </div>
        </div>
        <div className={styles.clientAdCard__urgency}>
          <span className={styles.clientAdCard__urgentTag}>{card.urgency}</span>
          <img src="/icons/bookmark.png" alt="Bookmark icon" />
        </div>
      </div>
      <p className={`border-bottom ${styles.clientAdCard__title}`}>
        {card.title}
      </p>
      <p className={styles.clientAdCard__description}>{card.description}</p>

      {/* Address + Map Link */}
      <img src="/arrows&location/location.png" alt="Location Icon" />
      <span className={styles.clientAdCard__location}>
        {card.city}, {card.country}
      </span>

      <div className={`border-bottom ${styles.clientAdCard__address}`}>
        <span>address</span>
        <a href="#">Show on the map</a>
      </div>

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
