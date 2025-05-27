import { Button } from "../../../../components/Button/Button";
import { ClientAdCard } from "../../../../components/ClientAdCard/ClientAdCard";
import { ClientAppHeader } from "../../components/ClientAppHeader/ClientAppHeader";
import { ClientProfile } from "./ClientProfile/ClientProfile";
import styles from "./Profile.module.css";
import { useUserStore } from "../../../../stores/userStore";
import { useFetchAds } from "../../../../hooks/useFetchAds";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const user = useUserStore((state) => state.user);

  const currentUser = user?.id;

  const { ads, error } = useFetchAds(currentUser);

  return (
    <section className={`wrapper ${styles.profile}`}>
      <ClientAppHeader title="Konto" />

      {/* User profile section */}
      <ClientProfile />

      {/* Post new ad section */}
      <h4 className={styles.profile__sectionTitle}>Post a New Ad</h4>
      <p className={styles.profile__sectionDescription}>
        Need help? Quickly create a new ad to request a service.
      </p>
      <Button onClick={() => navigate("/client-post-ad")}>
        Neue Anzeige erstellen
      </Button>

      {/* Active ads section */}
      <h4 className={styles.profile__sectionTitle}>Meine Aktiven Anzeigen</h4>
      <p className={styles.profile__sectionDescription}>
        Sehen, bearbeiten oder löschen Sie Ihre derzeit aktiven Anzeigen für
        Serviceanfragen.
      </p>
      {error && <p className="errorMessage">{error}</p>}
      {ads.length > 0 ? (
        ads.map((ad) => <ClientAdCard key={ad.id} card={ad} />)
      ) : (
        <p className={styles.profile__noAdsMessage}>
          No active ads at the moment.
        </p>
      )}
    </section>
  );
}
