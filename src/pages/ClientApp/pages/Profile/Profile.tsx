import { useEffect, useState } from "react";
import { Button } from "../../../../components/Button/Button";
import { ClientAdCard } from "../../../../components/ClientAdCard/ClientAdCard";
import { useAppNavigation } from "../../../../hooks/useAppNavigation";
import { ClientAppHeader } from "../../components/ClientAppHeader/ClientAppHeader";
import { ClientProfile } from "./ClientProfile/ClientProfile";
import styles from "./Profile.module.css";
import { Ad } from "../../../../types/types";
import { useUserStore } from "../../../../stores/userStore";

export default function Profile() {
  const [activeAds, setActiveAds] = useState<Ad[]>([]);
  const [error, setError] = useState("");
  const { navigate } = useAppNavigation();

  const user = useUserStore(state=>state.user)

  const currentUser = user?.id;

  useEffect(() => {
    const fetchUserAds = async () => {
      try {
        const res = await fetch(`http://localhost:3001/ads?userId=${currentUser}`);
        if (!res.ok) throw new Error("Failed to fetch ads");
        const data = await res.json();
        setActiveAds(data);
      } catch (err) {
        console.error(err);
        setError("Could not load ads.");
      }
    };

    fetchUserAds();
  }, [currentUser]);

  if (error) return <p className="errorMessage">{error}</p>;

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
      {activeAds.length > 0 ? (
        activeAds.map((ad) => <ClientAdCard key={ad.id} card={ad} />)
      ) : (
        <p className={styles.profile__noAdsMessage}>
          No active ads at the moment.
        </p>
      )}
    </section>
  );
}
