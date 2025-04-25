import { topRated } from "../staticData";
import styles from './TopRated.module.css';
import { Button } from "../../../components/Button/Button";
import { TopRatedCard } from "../../../components/HomepageTopRatedCard/TopRatedCard";

export function TopRated() {
  return (
    <section className={styles.topRatedSection}>
      <div className="wrapper">
        <h2 className="title-h2">Top-bewertete Handwerker</h2>
        <div className={styles.topRatedWrapper}>
          <div className={styles.topRatedCardsContainer}>
            {topRated.map((card, index) => (
              <TopRatedCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </div>
        <Button>Hausmeister Finden</Button>
      </div>
    </section>
  );
}
