import { create } from "zustand";
import { FilterValues } from "../types/types";

interface SearchStore {
  searchTerm: string;
  filters: FilterValues;
  setSearchTerm: (term: string) => void;
  setFilters: (filters: FilterValues) => void;
  resetFilters: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchTerm: "",
  filters: {
    services: [],
    availability: [],
  },
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilters: (filters) => set({ filters }),
  resetFilters: () =>
    set({
      filters: { services: [], availability: [] },
    }),
}));
