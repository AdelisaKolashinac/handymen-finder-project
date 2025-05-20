import { Button } from "../../../components/Button/Button";
import { ButtonTransparent } from "../../../components/ButtonTransparent/ButtonTransparent";
import styles from "./ButtonContainer.module.css";
import { useNavigate } from "react-router-dom";

export function ButtonContainer() {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div className={styles.buttonContainer}>
        <ButtonTransparent width="100%" onClick={() => navigate('/signup')}>
          Anfrage Posten
        </ButtonTransparent>
        <Button onClick={() => navigate('/services')}>Hausmeister Finden</Button>
      </div>
    </div>
  );
}
