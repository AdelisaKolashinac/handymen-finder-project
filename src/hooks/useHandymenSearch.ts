import { useState } from "react";
import { HandymanType } from "../types/types";
import { handymen } from "../data/data";

export const useHandymenSearch = () => {
  const [filteredHandymen, setFilteredHandymen] =
    useState<HandymanType[]>(handymen);

  const handleSearchSubmit = (
    searchTerm: string,
    filters?: {
      services?: string[];
      ratings?: string[];
      availability?: string[];
    }
  ) => {
    const lowerSearch = searchTerm.toLowerCase().trim();

    if (!lowerSearch) {
      setFilteredHandymen(handymen);
      return;
    }

    const result = handymen.filter((hm) => {
      const matchesSearch =
        !lowerSearch ||
        hm.name.toLowerCase().includes(lowerSearch) ||
        hm.location.toLowerCase().includes(lowerSearch) ||
        hm.description.toLowerCase().includes(lowerSearch) ||
        hm.jobTitle?.toLowerCase().includes(lowerSearch) ||
        hm.categories.some((cat) => cat.toLowerCase().includes(lowerSearch));

      const matchesServices =
        !filters?.services?.length ||
        filters.services.some((service) => hm.categories.includes(service));

      const matchesAvailability =
        !filters?.availability?.length ||
        filters.availability.includes(hm.available);

      return matchesSearch && matchesServices && matchesAvailability;
    });

    setFilteredHandymen(result);
  };

  return { filteredHandymen, handleSearchSubmit };
};
