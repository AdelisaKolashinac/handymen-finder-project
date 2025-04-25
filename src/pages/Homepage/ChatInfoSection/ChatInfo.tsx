import { Checkmark } from "../../../components/Checkmark/Checkmark";
import styles from "./ChatInfo.module.css";

export function ChatInfo() {
  return (
    <section>
      <div className="wrapper">
        <h2 className="title-h2">Instant Messaging für mühelose Buchunge</h2>
        <div className={styles.mobileImageContainer}>
          <img src="./homepage/iphone-12-pro.png" alt="Photo of Mobile phone" />
        </div>
        <Checkmark
          img="./homepage/checkmark-icon-1.png"
          textone="Beschreiben Sie Ihr Projekt"
          texttwo="Teilen Sie die Details des Auftrags und Ihre Wünsche mit."
        />
        <Checkmark
          img="./homepage/checkmark-icon-2.png"
          textone="Stellen Sie Fragen & Senden Sie Fotos"
          texttwo="Klären Sie offene Fragen und senden Sie Fotos für ein besseres Verständnis."
        />
        <Checkmark
          img="./homepage/checkmark-icon-3.png"
          textone="Bestätigen & Buchen"
          texttwo="Finalisieren Sie die Details und vereinbaren Sie sofort einen Termin."
        />
      </div>
    </section>
  );
}
