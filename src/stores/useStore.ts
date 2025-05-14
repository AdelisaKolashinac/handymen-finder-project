import { create } from "zustand";
import { Filters, User } from "../types/types";

interface StoreType {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;

  activeChatId: string | null;
  setActiveChatId: (id: string | null) => void;

  filters: Filters;
  setFilters: (filters: Partial<Filters>) => void;

  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;

  //   messages: Message[];
  //   addMessage: (message: Message) => void;
  //   setMessages: (messages: Message[]) => void;
}

export const useStore = create<StoreType>((set) => ({
  // Logged-in user
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),

  // Active chat ID
  activeChatId: null,
  setActiveChatId: (id) => set({ activeChatId: id }),

  // Handyman search filters
  filters: {
    location: "",
    jobTitle: "",
    available: "",
  },
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),

  // Loading state
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),

  //   messages: Message[];
  //   addMessage: (message: Message) => void;
  //   setMessages: (messages: Message[]) => void;
}));
