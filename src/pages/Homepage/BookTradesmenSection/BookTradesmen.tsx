import { Button } from "../../../components/Button/Button";
import styles from "./BookTradesmen.module.css";
import { useNavigate } from "react-router-dom";

export default function BookTradesmen() {
  const navigate = useNavigate();

  return (
    <section className={`wrapper ${styles.bookTradesmenSection}`}>
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
      <p className={styles.bookTradesmenSection__text}>
        Schließe dich über 10.000 zufriedenen Haushalten und Unternehmen an, die
        uns vertrauen, um erfahrene Profis zu finden. Chatten, planen und
        erledigen – alles an einem Ort.
      </p>
      <Button onClick={() => navigate('/signup')}>Jetzt anmelden</Button>
    </section>
  );
}
