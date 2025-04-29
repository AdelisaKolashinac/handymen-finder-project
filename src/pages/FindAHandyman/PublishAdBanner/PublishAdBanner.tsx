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
        <div className={styles.publishAdBanner__card}>
          <div className={styles.publishAdBanner__header}>
            <div className={styles.publishAdBanner__user}>
              <img
                src="/findAHandyman/anna.png"
                alt="Photo of Anna Müller"
                className={styles.publishAdBanner__userImage}
              />
              <div className={styles.publishAdBanner__userInfo}>
                <p className={styles.publishAdBanner__userName}>Anna Müller</p>
                <p className={styles.publishAdBanner__userTrust}>Trustworthy</p>
              </div>
            </div>
            <div className={styles.publishAdBanner__urgent}>
              <span className={styles.publishAdBanner__urgentTag}>URGENT</span>
              <img src="/findAHandyman/bookmark.png" alt="Bookmark icon" />
            </div>
          </div>
          <p className={`border-bottom ${styles.publishAdBanner__title}`}>
            Repair a leaky tube
          </p>
          <p className={styles.publishAdBanner__description}>
            Localize the source of the leak, place the water supply from . . .
          </p>

          {/* Address + Map Link */}
          <img src="/findAHandyman/location.png" alt="Location Icon" />
          <span className={styles.publishAdBanner__location}>
            Berlin, Germany
          </span>

          <div className={`border-bottom ${styles.publishAdBanner__address}`}>
            <span>address</span>
            <a href="#">Show on the map</a>
          </div>

          {/* Contact Button */}
          <div className={styles.publishAdBanner__buttonContainer}>
            <ButtonSmall>Contact</ButtonSmall>
          </div>
          <div className={styles.publishAdBanner__arrow}>
            <img src="/findAHandyman/arrow-down.png" alt="Arrow down" />
          </div>
        </div>
        <ButtonTransparent width="100%">Post request</ButtonTransparent>
      </div>
    </section>
  );
}
