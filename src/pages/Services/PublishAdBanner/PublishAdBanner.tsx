import { ButtonTransparent } from "../../../components/ButtonTransparent/ButtonTransparent";
import { ClientAdCard } from "../../../components/ClientAdCard/ClientAdCard";
import { useAppNavigation } from "../../../hooks/useAppNavigation";
import { activeAds } from "../../ClientApp/pages/Profile/profileData";
import styles from "./PublishAdBanner.module.css";

export default function PublishAdBanner() {
  const { signup } = useAppNavigation();

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

        {/* Ad Card */}
        <div className={styles.publishAdBanner__card}>
          {activeAds.slice(0, 1).map((ad) => (
            <ClientAdCard key={ad.id} card={ad} />
          ))}
        </div>

        <ButtonTransparent onClick={signup} width="100%">
          Post request
        </ButtonTransparent>
      </div>
    </section>
  );
}
