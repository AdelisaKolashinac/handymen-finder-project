import { ButtonSmall } from "../../../components/ButtonSmall/ButtonSmall";
import { ButtonTransparent } from "../../../components/ButtonTransparent/ButtonTransparent";
import styles from "./PublishAdBanner.module.css";

export default function PublishAdBanner() {
  return (
    <section className={styles.publishAdBanner}>
      <img
        src="/findAHandyman/blob.png"
        alt="Decorative background"
        className={styles.blob}
      />
      <div className="wrapper">
        <h2 className="title-h2">Are you looking for the right craftsman?</h2>
        <img
          src="/findAHandyman/blue-line-2.png"
          alt="Decorative blue line"
          className={styles.blueLine}
        />
        <p className={styles.publishAdBanner__subtitle}>
          Let me know how to help you - publish a free advertisement now!
        </p>

        {/* Ad Card */}
        
        <ButtonTransparent width="100%">Post request</ButtonTransparent>
      </div>
    </section>
  );
}
