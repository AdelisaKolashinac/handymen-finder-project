import { HandymanType } from "../../types/types";
import styles from "./TopRatedCard.module.css";

interface Props {
  card: HandymanType;
  index: number;
}

export function TopRatedCard({ card, index }: Props) {
  return (
    <div className={styles.topRatedCard}>
      <p
        className={`${styles.topRatedCard__category} ${
          index % 2 === 0 ? styles.even : styles.odd
        }`}
      >
        {card.categories[0]}
      </p>
      <img
        src={card.img}
        alt={card.name}
        className={styles.topRatedCard__image}
      />
      <div className={styles.topRatedCard__body}>
        <p className={styles.topRatedCard__name}>{card.name}</p>
        <span className={styles.topRatedCard__stats}>
          {card.performanceStats}
        </span>
        <div className={styles.topRatedCard__location}>
          <img src="/arrows&location/grey-location-icon.svg" alt="Location Icon" />
          <p>{card.location}</p>
        </div>
      </div>
    </div>
  );
}
