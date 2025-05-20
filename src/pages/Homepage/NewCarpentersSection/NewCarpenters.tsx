import { Button } from "../../../components/Button/Button";
import styles from "./NewCarpenters.module.css";
import { CarpenterCard } from "../../../components/HomepageCarpenterCard/CarpenterCard";
import { handymen } from "../../../data/data";
import { useNavigate } from "react-router-dom";

export function NewCarpenters() {
  const navigate= useNavigate();

  return (
    <section className={`wrapper ${styles.newCarpentersSection}`}>
      <h2 className="title-h2">
        Neu beigetreten, bereit zu{" "}
        <span className="fasthand-regular">helfen</span>!
      </h2>
      <div className={styles.newCarpentersSection__wrapper}>
        <div className={styles.newCarpentersSection__cardContainer}>
          {handymen.slice(0.3).map((card) => (
            <CarpenterCard key={card.id} card={card} />
          ))}
        </div>
      </div>
      <Button onClick={() => navigate('/services')}>Hausmeister Finden</Button>
    </section>
  );
}
