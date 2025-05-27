import { Button } from "../../../components/Button/Button";
import styles from "./NewCarpenters.module.css";
import { CarpenterCard } from "../../../components/HomepageCarpenterCard/CarpenterCard";
import { useNavigate } from "react-router-dom";
import { useFetchHandymen } from "../../../hooks/useFetchHandymen";

export function NewCarpenters() {
  const navigate = useNavigate();

  const { handymen, error } = useFetchHandymen();

  const newHandymen = handymen.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <section className={`wrapper ${styles.newCarpentersSection}`}>
      <h2 className="title-h2">
        Neu beigetreten, bereit zu{" "}
        <span className="fasthand-regular">helfen</span>!
      </h2>
      {error && <p className="errorMessage">{error}</p>}
      <div className={styles.newCarpentersSection__wrapper}>
        <div className={styles.newCarpentersSection__cardContainer}>
          {newHandymen.slice(0.3).map((card) => (
            <CarpenterCard key={card.id} card={card} />
          ))}
        </div>
      </div>
      <Button onClick={() => navigate("/services")}>Hausmeister Finden</Button>
    </section>
  );
}
