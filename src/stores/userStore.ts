import { create } from "zustand";
import { UserType } from "../types/types";

const userToken = localStorage.getItem("user");

interface UserStore {
  user: UserType | undefined;
  setUser: (userPayload: UserType) => void;
  updateUser: (userPayload: UserType) => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: userToken ? JSON.parse(userToken) : undefined,
  setUser: (userPayload) => set(() => ({ user: userPayload })),
  updateUser : (userPayload) => set((state) => ({
    user: {...state.user, ...userPayload}
  })),
  logout: () => {
    set(() => ({ user: undefined }));
    localStorage.removeItem("user");
  },
}));
