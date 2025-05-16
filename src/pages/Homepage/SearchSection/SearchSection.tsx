import { useNavigate } from "react-router-dom";
import { SearchInput } from "../../../components/SearchInput/SearchInput";
import { useEffect, useState } from "react";
import Filter from "../../Filter/Filter";
import { useSearchStore } from "../../../stores/searchStore";

export default function SearchSection() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { resetFilters } = useSearchStore();
  const navigate = useNavigate();

  useEffect(() => {
    resetFilters();
  }, [resetFilters]);

  const handleSearch = () => {
    navigate("/services");
  };

  return (
    <>
      <SearchInput
        onSearch={handleSearch}
        onOpenFilter={() => setIsFilterOpen(true)}
      />

      {isFilterOpen && (
        <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
      )}
    </>
  );
}
