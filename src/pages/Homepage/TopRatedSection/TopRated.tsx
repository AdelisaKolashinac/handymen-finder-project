import styles from "./TopRated.module.css";
import { Button } from "../../../components/Button/Button";
import { TopRatedCard } from "../../../components/HomepageTopRatedCard/TopRatedCard";
import { calculateAverageRating } from "../../../utils/calculateAverageRating";
import { useFetchHandymen } from "../../../hooks/useFetchHandymen";
import { useNavigate } from "react-router-dom";
import { useFetchReviews } from "../../../hooks/useFetchReviews";

export function TopRated() {
  const { handymen } = useFetchHandymen();
  const { reviews, error } = useFetchReviews();
  const navigate = useNavigate();

  const topRatedHandymen = handymen
    .map((hm) => {
      const handymanReviews = reviews.filter((rev) => rev.handymanId === hm.id);

      return {
        ...hm,
        reviews: handymanReviews,
        averageRating: calculateAverageRating(handymanReviews),
      };
    })
    .filter((h) => h.reviews.length > 0)
    .sort((a, b) => b.averageRating - a.averageRating)
    .slice(0, 4);

  return (
    <section className={`wrapper ${styles.topRatedSection}`}>
      <h2 className="title-h2">Top-bewertete Handwerker</h2>
      {error && <p className="errorMessage">{error}</p>}
      <div className={styles.topRatedSection_wrapper}>
        <div className={styles.topRatedSection_cardContainer}>
          {topRatedHandymen.map((card, index) => (
            <TopRatedCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
      <Button onClick={() => navigate("/services")}>Hausmeister Finden</Button>
    </section>
  );
}
