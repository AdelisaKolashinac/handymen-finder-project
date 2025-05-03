import { Checkmark } from "../../../components/Checkmark/Checkmark";
import styles from "./ChatInfo.module.css";

export function ChatInfo() {
  return (
    <section className={`wrapper ${styles.chatInfoSection}`}>
      <h2 className="title-h2">Instant Messaging für mühelose Buchunge</h2>
      <div className={styles.chatInfoSection_imgContainer}>
        <img src="./homepage/iphone-12-pro.png" alt="Photo of Mobile phone" />
      </div>
      <Checkmark
        img="./homepage/checkmark-icon-1.png"
        text_one="Beschreiben Sie Ihr Projekt"
        text_two="Teilen Sie die Details des Auftrags und Ihre Wünsche mit."
      />
      <Checkmark
        img="./homepage/checkmark-icon-2.png"
        text_one="Stellen Sie Fragen & Senden Sie Fotos"
        text_two="Klären Sie offene Fragen und senden Sie Fotos für ein besseres Verständnis."
      />
      <Checkmark
        img="./homepage/checkmark-icon-3.png"
        text_one="Bestätigen & Buchen"
        text_two="Finalisieren Sie die Details und vereinbaren Sie sofort einen Termin."
      />
    </section>
  );
}
