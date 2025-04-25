import { Button } from "../../../components/Button/Button";
import styles from "./ButtonContainer.module.css";

export function ButtonContainer() {
  return (
    <div className="wrapper">
      <div className={styles.buttonContainer}>
        <button type="button" className={styles.submitRequestButton}>
          Anfrage Posten
        </button>
        <Button>Hausmeister Finden</Button>
      </div>
    </div>
  );
}
