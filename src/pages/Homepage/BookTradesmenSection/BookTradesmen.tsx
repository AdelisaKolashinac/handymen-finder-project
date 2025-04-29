import { Button } from "../../../components/Button/Button";
import styles from "./BookTradesmen.module.css";

export default function BookTradesmen() {
  return (
    <section className={styles.bookTradesmenSection}>
      <div className="wrapper">
        <h2 className="title-h2">Finde und buche zuverlässige Handwerker</h2>
        <img
          src="/blue-line.png"
          alt="Decorative blue line"
          className={styles.blueLine}
        />
        <img
          src="/homepage/avatars.png"
          alt="Collage of user avatars representing satisfied clients"
        />
        <p className={styles.bookTradesmenText}>
          Schließe dich über 10.000 zufriedenen Haushalten und Unternehmen an,
          die uns vertrauen, um erfahrene Profis zu finden. Chatten, planen und
          erledigen – alles an einem Ort.
        </p>
        <Button>Jetzt anmelden</Button>
      </div>
    </section>
  );
}
