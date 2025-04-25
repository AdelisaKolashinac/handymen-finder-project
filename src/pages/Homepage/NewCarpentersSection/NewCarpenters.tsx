import { Button } from "../../../components/Button/Button";
import styles from "./NewCarpenters.module.css";
import { newCarpenters } from "../staticData";
import { CarpenterCard } from "../../../components/HomepageCarpenterCard/CarpenterCard";

export function NewCarpenters() {
  return (
    <section className={styles.newCarpentersSection}>
      <div className="wrapper">
        <h2 className="title-h2">
          Neu beigetreten, bereit zu{" "}
          <span className="fasthand-regular">helfen</span>!
        </h2>
        <div className={styles.newCarpentersWrapper}>
          <div className={styles.newCarpentersContainer}>
            {newCarpenters.map((card) => (
              <CarpenterCard key={card.id} card={card} />
            ))}
          </div>
        </div>
        <Button>Hausmeister Finden</Button>
      </div>
    </section>
  );
}
