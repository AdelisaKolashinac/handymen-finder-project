import { Button } from "../../../components/Button/Button";
import { ButtonTransparent } from "../../../components/ButtonTransparent/ButtonTransparent";
import styles from "./ButtonContainer.module.css";
import { useAppNavigation } from "../../../hooks/useAppNavigation";

export function ButtonContainer() {
  const { services, signup } = useAppNavigation();

  return (
    <div className="wrapper">
      <div className={styles.buttonContainer}>
        <ButtonTransparent width="100%" onClick={signup}>
          Anfrage Posten
        </ButtonTransparent>
        <Button onClick={services}>Hausmeister Finden</Button>
      </div>
    </div>
  );
}
