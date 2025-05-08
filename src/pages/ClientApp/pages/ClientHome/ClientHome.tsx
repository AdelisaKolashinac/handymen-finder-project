import { SearchInput } from "../../../../components/SearchInput/SearchInput";
import { handymen } from "../../../../data/data";
import { useSearchStore } from "../../../../stores/searchStore";
import { useUserStore } from "../../../../stores/userStore";
import { calculateAverageRating } from "../../../../utils/calculateAverageRating";
import { ClientAppHeader } from "../../components/ClientAppHeader/ClientAppHeader";
import { RecommendedCard } from "../../components/RecommendedCard/RecommendedCard";
import styles from "./ClientHome.module.css";

export default function ClientHome() {
  const user = useUserStore((state) => state.user);
  const { searchTerm, setSearchTerm } = useSearchStore();

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
