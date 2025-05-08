import { useEffect, useState } from "react";
import { HandymanResultCard } from "../../../components/HandymanResultCard/HandymanResultCard";
import { calculateAverageRating } from "../../../utils/calculateAverageRating";
import styles from "./HandymenResults.module.css";
import { ButtonTransparent } from "../../../components/ButtonTransparent/ButtonTransparent";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { useHandymenSearch } from "../../../hooks/useHandymenSearch";

export default function HandymenResults() {
  const [visibleResults, setVisibleResults] = useState(5);
  const [expanded, setExpanded] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const { filteredHandymen, handleSearchSubmit } = useHandymenSearch();

  useEffect(() => {
    if (searchTerm === "") {
      setSortOption("");
    }
  }, [searchTerm]);

  if (!filteredHandymen.length) {
    return <p>No handymen found. Try adjusting your search.</p>;
  }

  const handymenAverageRating = filteredHandymen.map((h) => ({
    ...h,
    averageRating: calculateAverageRating(h.reviews),
  }));

  const sortedHandymen = [...handymenAverageRating].sort((a, b) => {
    if (sortOption === "rating") {
      return b.averageRating - a.averageRating;
    } else if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "location") {
      return a.location.localeCompare(b.location);
    }
    return 0;
  });

  const handleSeeMore = () => {
    setVisibleResults((prev) => prev + 5);
    setExpanded(true);
  };

  const handleShowLess = () => {
    setVisibleResults(5);
    setExpanded(false);
  };

  return (
    <>
      <SearchInput
        handleSearch={handleSearchSubmit}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <section className="wrapper">
        <div className={`border-bottom ${styles.handymanResults__header}`}>
          <p className={styles.handymanResults__text}>
            {filteredHandymen.length} result
            {filteredHandymen.length !== 1 && "s"}
          </p>

          <select
            name="view"
            id="view"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">View</option>
            <option value="rating">Highest rating</option>
            <option value="name">Name A–Z</option>
            <option value="location">Location A–Z</option>
          </select>
        </div>
        {sortedHandymen.slice(0, visibleResults).map((result) => (
          <HandymanResultCard
            key={result.id}
            resultCard={result}
            averageRating={calculateAverageRating(result.reviews)}
          />
        ))}
        <div className={styles.handymanResults__buttons}>
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
      </section>
    </>
  );
}
