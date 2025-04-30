import { SearchInput } from "../../../../components/SearchInput/SearchInput";
import { calculateAverageRating } from "../../../../utils/calculateAverageRating";
import { ClientAppHeader } from "../../components/ClientAppHeader/ClientAppHeader";
import { RecommendedCard } from "../../components/RecommendedCard/RecommendedCard";
import styles from "./Home.module.css";
import { recommendedResults } from "./homeData";

export default function Home() {
  const averageRating = recommendedResults.map((result) => {
    const ratings = result.reviews.map((review) => ({ rating: review.rating }));

    return calculateAverageRating(ratings);
  });

  return (
    <section className={`wrapper ${styles.home}`}>
      <ClientAppHeader title="Hello Anna," />
      <p className={styles.home__intro}>
        Are you looking for help? . Find suitable craftsmen for your needs.
        Below are the latest displays of craftsmen near you .
      </p>
      <div className={styles.home__search}>
        <SearchInput />
        <div className={styles.home__searchIcon}>
          <img src="/clientApp/home/pencil-icon.png" alt="Pencil Icon" />
        </div>
      </div>
      <p className={`border-bottom ${styles.home__sectionTitle}`}>
        Recommended listings
      </p>
      <div className={styles.home__recommendedList}>
        {recommendedResults.map((res, index) => (
          <RecommendedCard
            key={res.id}
            card={res}
            averageRating={averageRating[index]}
          />
        ))}
      </div>
    </section>
  );
}
