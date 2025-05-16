import { create } from "zustand";
import { User } from "../types/types";

const userToken = localStorage.getItem("user");

interface UserStore {
  user: User | undefined;
  setUser: (userPayload: User) => void;
  updateUser: (userPayload: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: userToken ? JSON.parse(userToken) : undefined,
  setUser: (userPayload) => {
    localStorage.setItem("user", JSON.stringify(userPayload));
    set({ user: userPayload });
  },
  updateUser: (userPayload) =>
    set((state) => {
      const updatedUser = { ...(state.user ?? {}), ...userPayload };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return { user: updatedUser };
    }),
  logout: () => {
    localStorage.removeItem("user");
    set({ user: undefined });
  },
}));
