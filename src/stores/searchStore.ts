import { create } from "zustand";
import { FilterValues } from "../types/types";

interface SearchStore {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filters: FilterValues;
  setFilters: (filters: Partial<FilterValues>) => void;
  resetFilters: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  filters: {
    categories: [],
    services: [],
    availability: [],
  },
  setFilters: (newFilters) =>
    set((state) => ({
      filters: {
        ...state.filters,
        ...newFilters,
      },
    })),

  resetFilters: () =>
    set({
      searchTerm: "",
      filters: {
        categories: [],
        services: [],
        availability: [],
      },
    }),
}));
