import { useState } from "react";
import { HandymanResultCard } from "../../../components/HandymanResultCard/HandymanResultCard";
import { calculateAverageRating } from "../../../utils/calculateAverageRating";
import { handymanResults } from "../FindAHandymanData";
import styles from "./HandymenResults.module.css";
import { ButtonTransparent } from "../../../components/ButtonTransparent/ButtonTransparent";

export default function HandymenResults() {
  const [visibleResults, setVisibleResults] = useState(6);
  const [expanded, setExpanded] = useState(false);

  if (!handymanResults.length) {
    return <p>No handymen found. Try adjusting your search.</p>;
  }

  const averageRating = handymanResults.map((result) => {
    const ratings = result.reviews.map((review) => ({ rating: review.rating }));

    return calculateAverageRating(ratings);
  });

  const handleSeeMore = () => {
    setVisibleResults((prev) => prev + 6);
    setExpanded(true);
  };

  const handleShowLess = () => {
    setVisibleResults(6);
    setExpanded(false);
  };

  return (
    <section>
      <div className="wrapper">
        <div className={`border-bottom ${styles.handymanResults__header}`}>
          <p>{handymanResults.length} results</p>
          <select name="view" id="view">
            <option value="">View</option>
            <option value="">Sort by rating</option>
            <option value="rating">Sort by name</option>
            <option value="location">Sort by location</option>
          </select>
        </div>
        {handymanResults.slice(0, visibleResults).map((result, index) => (
          <HandymanResultCard
            key={result.id}
            resultCard={result}
            averageRating={averageRating[index]}
          />
        ))}
        <div className={styles.buttonContainer}>
          {!expanded ? (
            <ButtonTransparent width="180px" onClick={handleSeeMore}>
              See more
            </ButtonTransparent>
          ) : (
            <ButtonTransparent width="180px" onClick={handleShowLess}>
              Show less
            </ButtonTransparent>
          )}
        </div>
      </div>
    </section>
  );
}
