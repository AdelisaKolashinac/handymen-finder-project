import styles from "./TopRated.module.css";
import { Button } from "../../../components/Button/Button";
import { TopRatedCard } from "../../../components/HomepageTopRatedCard/TopRatedCard";
import { useAppNavigation } from "../../../hooks/useAppNavigation";
import { calculateAverageRating } from "../../../utils/calculateAverageRating";
import { useFetchHandymen } from "../../../hooks/useFetchHandymen";

export function TopRated() {
  const { handymen } = useFetchHandymen();
  const { services } = useAppNavigation();

  const topRatedHandymen = handymen
    .filter((h) => h.reviews.length > 0)
    .sort(
      (a, b) =>
        calculateAverageRating(b.reviews) - calculateAverageRating(a.reviews)
    )
    .slice(0, 4);

  return (
    <section className={`wrapper ${styles.topRatedSection}`}>
      <h2 className="title-h2">Top-bewertete Handwerker</h2>
      <div className={styles.topRatedSection_wrapper}>
        <div className={styles.topRatedSection_cardContainer}>
          {topRatedHandymen.map((card, index) => (
            <TopRatedCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
      <Button onClick={services}>Hausmeister Finden</Button>
    </section>
  );
}
