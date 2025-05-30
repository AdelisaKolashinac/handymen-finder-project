import { SearchInput } from "../../../../components/SearchInput/SearchInput";
import { useSearchStore } from "../../../../stores/searchStore";
import { useUserStore } from "../../../../stores/userStore";
import { ClientAppHeader } from "../../components/ClientAppHeader/ClientAppHeader";
import { RecommendedCard } from "../../components/RecommendedCard/RecommendedCard";
import styles from "./ClientHome.module.css";
import { useFetchHandymen } from "../../../../hooks/useFetchHandymen";
import { useState } from "react";
import Filter from "../../../Filter/Filter";
import { useFetchReviews } from "../../../../hooks/useFetchReviews";
import { enrichHandymenWithReviews } from "../../../../utils/enrichHandymen";

export default function ClientHome() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const user = useUserStore((state) => state.user);
  const { searchTerm, filters } = useSearchStore();

  const { handymen, error } = useFetchHandymen();
  const { reviews } = useFetchReviews();
  const handymenWithRatings = enrichHandymenWithReviews(handymen, reviews);

  const nearbyHandymen = handymenWithRatings.filter(
    (hm) => hm.location.toLowerCase() === user?.location?.toLowerCase()
  );

  const filteredHandymen = handymenWithRatings.filter((h) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch = searchTerm
      ? h.name.toLowerCase().includes(search) ||
        h.description.toLowerCase().includes(search) ||
        h.jobTitle.toLowerCase().includes(search) ||
        h.categories.some((cat) => cat.toLowerCase().includes(search))
      : true;

    const matchesCategory = filters.categories?.length
      ? filters.categories.some((filterCategory) =>
          h.categories?.some(
            (hmCategory) =>
              hmCategory.toLowerCase() === filterCategory.toLowerCase()
          )
        )
      : true;

    const matchesService = filters.services?.length
      ? filters.services.some((filterService) =>
          h.services?.some(
            (hmService) =>
              hmService.toLowerCase() === filterService.toLowerCase()
          )
        )
      : true;

    const matchesAvailability = filters.availability?.length
      ? filters.availability.includes(h.available)
      : true;

    return (
      matchesSearch && matchesService && matchesAvailability && matchesCategory
    );
  });

  return (
    <>
      <section className={`wrapper ${styles.home}`}>
        <ClientAppHeader title={`Hello ${user?.fullname},`} />
        <p className={styles.home__intro}>
          Are you looking for help? . Find suitable craftsmen for your needs.
          Below are the latest displays of craftsmen near you .
        </p>
        <div className={styles.home__search}>
          <SearchInput onOpenFilter={() => setIsFilterOpen(true)} />
          <div className={styles.home__searchIcon}>
            <img src="/clientApp/home/pencil-icon.png" alt="Advanced filters" />
          </div>
        </div>
        <p className={`border-bottom ${styles.home__sectionTitle}`}>
          Recommended listings
        </p>
        {error && <p className="errorMessage">{error}</p>}
        <div className={styles.home__recommendedList}>
          {searchTerm || filters ? (
            filteredHandymen.length > 0 ? (
              filteredHandymen.map((hm) => (
                <RecommendedCard
                  key={hm.id}
                  card={hm}
                  averageRating={hm.averageRating}
                  reviewsCount={hm.reviewsCount}
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
                  averageRating={hm.averageRating}
                  reviewsCount={hm.reviewsCount}
                />
              ))
          ) : (
            <p>No nearby craftsmen found at your location.</p>
          )}
        </div>
      </section>
      {isFilterOpen && (
        <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
      )}
    </>
  );
}
