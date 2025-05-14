import { useEffect, useState } from "react";
import { SearchInput } from "../../../../components/SearchInput/SearchInput";
import { useSearchStore } from "../../../../stores/searchStore";
import { useUserStore } from "../../../../stores/userStore";
import { calculateAverageRating } from "../../../../utils/calculateAverageRating";
import { ClientAppHeader } from "../../components/ClientAppHeader/ClientAppHeader";
import { RecommendedCard } from "../../components/RecommendedCard/RecommendedCard";
import styles from "./ClientHome.module.css";
import { Handyman } from "../../../../types/types";

export default function ClientHome() {
  const [handymen, setHandymen] = useState<Handyman[]>([]);
  const [error, setError] = useState<string | null>(null);
  const user = useUserStore((state) => state.user);
  const { searchTerm, setSearchTerm } = useSearchStore();

  useEffect(() => {
    const fetchHandymen = async () => {
      try {
        const res = await fetch("http://localhost:3001/handymen");
        if (!res.ok) throw new Error("Failed to fetch handymen");

        const data: Handyman[] = await res.json();
        setHandymen(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Could not load craftsmen.");
      }
    };

    fetchHandymen();
  }, []);

  const nearbyHandymen = handymen.filter(
    (hm) => hm.location.toLowerCase() === user?.location?.toLowerCase()
  );

  const filteredHandymen = handymen.filter((hm) => {
    const term = searchTerm.toLowerCase();

    return (
      hm.name.toLowerCase().includes(term) ||
      hm.location.toLowerCase().includes(term) ||
      hm.jobTitle?.toLowerCase().includes(term) ||
      hm.description.toLowerCase().includes(term) ||
      hm.available.toLowerCase().includes(term) ||
      hm.categories.some((cat) => cat.toLowerCase().includes(term))
    );
  });

  if (error) return <p className="errorMessage">{error}</p>;

  return (
    <section className={`wrapper ${styles.home}`}>
      <ClientAppHeader title={`Hello ${user?.fullname},`} />
      <p className={styles.home__intro}>
        Are you looking for help? . Find suitable craftsmen for your needs.
        Below are the latest displays of craftsmen near you .
      </p>
      <div className={styles.home__search}>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className={styles.home__searchIcon}>
          <img src="/clientApp/home/pencil-icon.png" alt="Advanced filters" />
        </div>
      </div>
      <p className={`border-bottom ${styles.home__sectionTitle}`}>
        Recommended listings
      </p>
      <div className={styles.home__recommendedList}>
        {searchTerm ? (
          filteredHandymen.length > 0 ? (
            filteredHandymen
              .slice(0, 4)
              .map((hm) => (
                <RecommendedCard
                  key={hm.id}
                  card={hm}
                  averageRating={calculateAverageRating(hm.reviews)}
                />
              ))
          ) : (
            <p>No craftsmen found for your search.</p>
          )
        ) : nearbyHandymen.length > 0 ? (
          nearbyHandymen
            .slice(0, 3)
            .map((hm) => (
              <RecommendedCard
                key={hm.id}
                card={hm}
                averageRating={calculateAverageRating(hm.reviews)}
              />
            ))
        ) : (
          <p>No nearby craftsmen found at your location.</p>
        )}
      </div>
    </section>
  );
}
