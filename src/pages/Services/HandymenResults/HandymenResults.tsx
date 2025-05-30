import { useState } from "react";
import { HandymanResultCard } from "../../../components/HandymanResultCard/HandymanResultCard";
import { calculateAverageRating } from "../../../utils/calculateAverageRating";
import styles from "./HandymenResults.module.css";
import { ButtonTransparent } from "../../../components/ButtonTransparent/ButtonTransparent";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { useSearchStore } from "../../../stores/searchStore";
import Filter from "../../Filter/Filter";
import { useFetchHandymen } from "../../../hooks/useFetchHandymen";
import { useFetchReviews } from "../../../hooks/useFetchReviews";

const INITIAL_VISIBLE_RESULTS = 5;

export default function HandymenResults() {
  const [visibleResults, setVisibleResults] = useState(INITIAL_VISIBLE_RESULTS);
  const [sortOption, setSortOption] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { searchTerm, filters, resetFilters } = useSearchStore();

  const { handymen, error } = useFetchHandymen();
  const { reviews } = useFetchReviews();

  const filteredHandymen = handymen
    .map((hm) => {
      const handymanReviews = reviews.filter((rev) => rev.handymanId === hm.id);
      return {
        ...hm,
        averageRating: calculateAverageRating(handymanReviews),
        reviewsCount: handymanReviews.length,
      };
    })
    .filter((hm) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch = searchTerm
        ? hm.name.toLowerCase().includes(search) ||
          hm.description.toLowerCase().includes(search) ||
          hm.jobTitle.toLowerCase().includes(search) ||
          hm.categories.some((cat) => cat.toLowerCase().includes(search))
        : true;

      const matchesCategory = filters.categories?.length
        ? filters.categories.some((filterCategory) =>
            hm.categories?.some(
              (hmCategory) =>
                hmCategory.toLowerCase() === filterCategory.toLowerCase()
            )
          )
        : true;

      const matchesService = filters.services?.length
        ? filters.services.some((filterService) =>
            hm.services?.some(
              (hmService) =>
                hmService.toLowerCase() === filterService.toLowerCase()
            )
          )
        : true;

      const matchesAvailability = filters.availability?.length
        ? filters.availability.includes(hm.available)
        : true;

      return (
        matchesSearch &&
        matchesService &&
        matchesAvailability &&
        matchesCategory
      );
    });

  const sortedHandymen = [...filteredHandymen].sort((a, b) => {
    if (sortOption === "rating") return b.averageRating - a.averageRating;
    if (sortOption === "name") return a.name.localeCompare(b.name);
    if (sortOption === "location") return a.location.localeCompare(b.location);
    return 0;
  });

  const handleSeeMore = () => {
    setVisibleResults((prev) => prev + INITIAL_VISIBLE_RESULTS);
  };

  const handleShowLess = () => {
    setVisibleResults(INITIAL_VISIBLE_RESULTS);
  };

  return (
    <>
      <SearchInput onOpenFilter={() => setIsFilterOpen(true)} />

      {isFilterOpen && (
        <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
      )}

      <section className="wrapper">
        {error && <p className="errorMessage">{error}</p>}

        {!error && (
          <>
            <div className={`border-bottom ${styles.handymanResults__header}`}>
              <p className={styles.handymanResults__text}>
                {filteredHandymen.length} result
                {filteredHandymen.length !== 1 && "s"}
              </p>

              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="">Sort by</option>
                <option value="rating">Highest rating</option>
                <option value="name">Name A–Z</option>
                <option value="location">Location A–Z</option>
              </select>
            </div>

            {sortedHandymen.length === 0 ? (
              <>
                <ButtonTransparent
                  width="100px"
                  onClick={() => {
                    resetFilters();
                  }}
                >
                  Reset Filters
                </ButtonTransparent>
                <p>No handymen found. Try adjusting your search.</p>
              </>
            ) : (
              sortedHandymen
                .slice(0, visibleResults)
                .map((result) => (
                  <HandymanResultCard
                    key={result.id}
                    resultCard={result}
                    averageRating={result.averageRating}
                    reviewsCount={result.reviewsCount}
                  />
                ))
            )}

            {sortedHandymen.length > INITIAL_VISIBLE_RESULTS && (
              <div className={styles.handymanResults__buttons}>
                {visibleResults < sortedHandymen.length ? (
                  <ButtonTransparent width="180px" onClick={handleSeeMore}>
                    See more
                  </ButtonTransparent>
                ) : (
                  <ButtonTransparent width="180px" onClick={handleShowLess}>
                    Show less
                  </ButtonTransparent>
                )}
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}
