import { ButtonTransparent } from "../../../components/ButtonTransparent/ButtonTransparent";
import styles from "./PublishAdBanner.module.css";
import { useNavigate } from "react-router-dom";

export default function PublishAdBanner() {
  const navigate = useNavigate();

  return (
    <section className={styles.publishAdBanner}>
      <img
        src="/blob.png"
        alt="Decorative background"
        className={styles.blob}
      />
      <div className="wrapper">
        <h2 className="title-h2">Are you looking for the right craftsman?</h2>
        <img
          src="/blue-line-2.png"
          alt="Decorative blue line"
          className={styles.blueLine}
        />
        <p className={styles.publishAdBanner__subtitle}>
          Let me know how to help you - publish a free advertisement now!
        </p>

        <div className={styles.publishAdBanner__card}>
          <img src="/client-posting-default.png" alt="Client posted ad" />
        </div>

        <div className={styles.publishAdBanner__button}>
          <ButtonTransparent onClick={() => navigate("/signup")} width="100%">
            Post request
          </ButtonTransparent>
        </div>
      </div>
    </section>
  );
}
