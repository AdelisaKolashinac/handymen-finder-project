import { TopRated } from "../../pages/Homepage/staticData";
import styles from "./TopRatedCard.module.css";

interface Props {
  card: TopRated;
  index: number;
}

export function TopRatedCard({ card, index }: Props) {
  return (
    <div className={styles.topRatedCard}>
      <p
        className={`${styles.topRatedCategory} ${
          index % 2 === 0 ? styles.even : styles.odd
        }`}
      >
        {card.category}
      </p>
      <img
        src={card.img}
        alt={card.name}
        className={styles.topRatedCardImage}
      />
      <div className={styles.topRatedCardBody}>
        <p className={styles.topRatedName}>{card.name}</p>
        <span className={styles.topRatedStats}>{card.performanceStats}</span>
        <div className={styles.topRatedLocation}>
          <img src="./homepage/topRated/location.svg" alt="Location Icon" />
          <p>{card.location}</p>
        </div>
      </div>
    </div>
  );
}
