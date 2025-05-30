import { Handyman } from "../../types/types";
import styles from "./CarpenterCard.module.css";

interface Props {
  card: Handyman;
}

export function CarpenterCard({ card }: Props) {
  return (
    <div className={styles.carpenterCard}>
      <img
        src={card.img}
        alt={card.name}
        className={styles.carpenterCard__image}
      />
      <div className={styles.carpenterCard__info}>
        <p className={styles.carpenterCard__name}>{card.name}</p>
        <img src="/icons/check-profile-icon.svg" alt="Check icon" />
      </div>
      <p className={styles.carpenterCard__category}>{card.categories[0]}</p>
    </div>
  );
}
