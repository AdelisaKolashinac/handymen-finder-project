import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { RoleSwitcher } from "../../components/RoleSwitcher/RoleSwitcher";
import styles from "./Homepage.module.css";
import { Button } from "../../components/Button/Button";

export default function Homepage() {
  const [isClient, setIsClient] = useState(true);

  const handleSwitch = () => {
    setIsClient((prevState) => !prevState);
  };

  return (
    <>
      <Navbar />
      <RoleSwitcher isClient={isClient} handleSwitch={handleSwitch} />
      <section className={styles.homepage}>
        <div className="wrapper">
          <h1>
            Handwerker leicht <span className="fasthand-regular">gemacht</span>
          </h1>
          <p>Alle Dienstleistungen, die Sie brauchen, an einem Ort.</p>
          <div className={styles.imgContainer}>
            <img src="./homepage/Frame 427320206.png" alt="Images of workers" />
          </div>
          <div className={styles.btnContainer}>
            <button type="button" className={styles.anfrageBtn}>
              Anfrage Posten
            </button>
            <Button>Hausmeister Finden</Button>
          </div>
        </div>
      </section>
    </>
  );
}
