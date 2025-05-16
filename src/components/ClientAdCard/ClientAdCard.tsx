import { Ad } from "../../types/types";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";
import styles from "./ClientAdCard.module.css";

interface Props {
  card: Ad;
}

export function ClientAdCard({ card }: Props) {
  return (
    <div className={styles.clientAdCard}>
      <div className={styles.clientAdCard__header}>
        <div className={styles.clientAdCard__user}>
          <img
            // src={card.img}
            // alt={card.name}
            className={styles.clientAdCard__userImage}
          />
          <div className={styles.clientAdCard__userInfo}>
            <p className={styles.clientAdCard__userName}>name</p>
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
      <p className={styles.clientAdCard__title}>
        {card.service}
      </p>
      <p className={styles.clientAdCard__date}>{card.createdAt}</p>
    </div>
      <p className={styles.clientAdCard__description}>{card.description}</p>

      {/* Address + Map Link */}
      <img src="/arrows&location/location.png" alt="Location Icon" />
      <span className={styles.clientAdCard__location}>{card.location}</span>

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
