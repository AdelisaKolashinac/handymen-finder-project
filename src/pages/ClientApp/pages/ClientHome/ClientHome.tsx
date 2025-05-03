// import { SearchInput } from "../../../../components/SearchInput/SearchInput";
import { handymen } from "../../../../data/data";
import { useUserStore } from "../../../../stores/userStore";
import { calculateAverageRating } from "../../../../utils/calculateAverageRating";
import { ClientAppHeader } from "../../components/ClientAppHeader/ClientAppHeader";
import { RecommendedCard } from "../../components/RecommendedCard/RecommendedCard";
import styles from "./ClientHome.module.css";

export default function ClientHome() {
  const user = useUserStore((state) => state.user);

  const topRatedHandymen = handymen
    .map((hm) => ({
      ...hm,
      averageRating: calculateAverageRating(hm.reviews),
    }))
    .sort((a, b) => b.averageRating - a.averageRating);

  return (
    <section className={`wrapper ${styles.home}`}>
      <ClientAppHeader title={`Hello ${user?.fullname},`} />
      <p className={styles.home__intro}>
        Are you looking for help? . Find suitable craftsmen for your needs.
        Below are the latest displays of craftsmen near you .
      </p>
      <div className={styles.home__search}>
        {/* <SearchInput /> */}
        <div className={styles.home__searchIcon}>
          <img src="/clientApp/home/pencil-icon.png" alt="Pencil Icon" />
        </div>
      </div>
      <p className={`border-bottom ${styles.home__sectionTitle}`}>
        Recommended listings
      </p>
      <div className={styles.home__recommendedList}>
        {topRatedHandymen.slice(0, 4).map((hm) => (
          <RecommendedCard
            key={hm.id}
            card={hm}
            averageRating={calculateAverageRating(hm.reviews)}
          />
        ))}
      </div>
    </section>
  );
}
