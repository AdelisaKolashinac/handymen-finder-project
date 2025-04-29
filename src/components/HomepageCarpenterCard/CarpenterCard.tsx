import { NewCarpenter } from "../../pages/Homepage/homepageData";
import styles from "./CarpenterCard.module.css";

interface Props {
  card: NewCarpenter;
}

export function CarpenterCard({ card }: Props) {
  return (
    <div className={styles.carpenterCard}>
      <img src={card.img} alt={card.name} className={styles.carpenterImg} />
      <div className={styles.carpenterName}>
        <p>{card.name}</p>
        <img src="./homepage/newCarpenters/check.svg" alt="Check" />
      </div>
      <p>{card.specialty}</p>
    </div>
  );
}
