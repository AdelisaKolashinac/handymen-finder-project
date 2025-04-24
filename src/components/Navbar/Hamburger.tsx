import { Button } from "../Button/Button";
import styles from "./Navbar.module.css";

export function Hamburger() {
  return (
    <div className={styles.menuOverlay}>
      <ul className={styles.menuList}>
        <li>
          <a href="#">Suchen</a>
        </li>
        <li>
          <a href="#">Inserent</a>
        </li>
        <li>
          <a href="#">Anmelden</a>
        </li>
        <li>
          <a href="#">Registrieren</a>
        </li>
      </ul>
      <form className={styles.menuForm}>
        <input type="text" placeholder="Suchen" />
        <select name="kategorie">
          <option value="" selected>
            Kategorie
          </option>
        </select>
        <Button>Suchen</Button>
      </form>
    </div>
  );
}
