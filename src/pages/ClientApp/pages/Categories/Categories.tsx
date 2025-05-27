import { useMemo, useState } from "react";
import { CategoryCard } from "../../../../components/CategoryCard/CategoryCard";
import { SearchInput } from "../../../../components/SearchInput/SearchInput";
import { ClientAppHeader } from "../../components/ClientAppHeader/ClientAppHeader";
import styles from "./Categories.module.css";
import { ButtonTransparent } from "../../../../components/ButtonTransparent/ButtonTransparent";
import { HandymanResultCard } from "../../../../components/HandymanResultCard/HandymanResultCard";
import Filter from "../../../Filter/Filter";
import { useSearchStore } from "../../../../stores/searchStore";
import { useFetchCategories } from "../../../../hooks/useFetchCategories";
import { useFetchHandymen } from "../../../../hooks/useFetchHandymen";
import { enrichHandymenWithReviews } from "../../../../utils/enrichHandymen";
import { useFetchReviews } from "../../../../hooks/useFetchReviews";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const { categories, error } = useFetchCategories();
  const { handymen } = useFetchHandymen();
  const { reviews } = useFetchReviews();
  const { searchTerm, setSearchTerm, filters, resetFilters } = useSearchStore();
  const handymenWithRatings = enrichHandymenWithReviews(handymen, reviews);

  const hasFilters =
    searchTerm.trim() !== "" ||
    selectedCategory !== null ||
    filters.services.length > 0 ||
    filters.availability.length > 0;

  const filteredHandymen = useMemo(() => {
    return handymenWithRatings.filter((hm) => {
      const matchesSearch =
        hm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hm.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hm.jobTitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hm.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hm.categories?.some((cat) =>
          cat.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory &&
        hm.categories?.some(
          (cat) => cat.toLowerCase() === selectedCategory.toLowerCase()
        );

      // Filter by services and availability based on the filters
      const matchesServices =
        filters.services.length === 0 ||
        hm.services?.some((serv) =>
          filters.services
            .map((service) => service.toLowerCase())
            .includes(serv.toLowerCase())
        );

      const matchesAvailability =
        filters.availability.length === 0 ||
        filters.availability.includes(hm.available);

      return (
        (searchTerm.trim() ? matchesSearch : true) &&
        (selectedCategory ? matchesCategory : true) &&
        matchesServices &&
        matchesAvailability
      );
    });
  }, [
    handymenWithRatings,
    filters.availability,
    filters.services,
    searchTerm,
    selectedCategory,
  ]);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setSearchTerm("");
  };

  const handleReset = () => {
    setSelectedCategory(null);
    setSearchTerm("");
    resetFilters();
  };

  return (
    <section className={`wrapper ${styles.categories}`}>
      <ClientAppHeader title="Search category" />
      <p className={styles.categories__subtitle}>
        Use the search bar to refine your search, or select a category from
        below
      </p>

      <SearchInput onOpenFilter={() => setIsFilterModalOpen(true)} />

      {error && <p className="errorMessage">{error}</p>}

      {hasFilters && (
        <ButtonTransparent width="150px" onClick={handleReset}>
          go back on categories
        </ButtonTransparent>
      )}

      {hasFilters ? (
        <div className={styles.categories__searchCardContainer}>
          {filteredHandymen.length > 0 ? (
            filteredHandymen.map((hm) => (
              <HandymanResultCard
                key={hm.id}
                resultCard={hm}
                averageRating={hm.averageRating}
                reviewsCount={hm.reviewsCount}
              />
            ))
          ) : (
            <p>No handymen found for your search.</p>
          )}
        </div>
      ) : (
        <div className={styles.categories__cardContainer}>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category.title)}
            />
          ))}
        </div>
      )}

      <Filter
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      />
    </section>
  );
}
