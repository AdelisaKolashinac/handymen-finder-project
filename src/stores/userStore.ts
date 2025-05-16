import { create } from "zustand";
import { User } from "../types/types";
import {
  onAuthStateChanged,
  signOut,
  User as FirebaseUser,
} from "firebase/auth";
import { auth } from "../lib/firebase";

interface UserStore {
  user: User | undefined;
  loading: boolean;
  setUser: (userPayload: User | undefined) => void;
  updateUser: (userPayload: Partial<User>) => void;
  logout: () => Promise<void>;
  listenToAuthChanges: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: undefined,
  loading: true,

  setUser: (userPayload) => set({ user: userPayload, loading: false }),

  updateUser: (userPayload) =>
    set((state) => ({
      user: { ...state.user, ...userPayload } as User,
    })),

  logout: async () => {
    await signOut(auth);
    set({ user: undefined });
  },

  listenToAuthChanges: () => {
    onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const appUser: User = {
          id: firebaseUser.uid,
          fullname: firebaseUser.displayName || "",
          email: firebaseUser.email || "",
          phone: firebaseUser.phoneNumber || "",
          type: "CLIENT",
          provider:
            firebaseUser.providerData[0]?.providerId === "google.com"
              ? "GOOGLE"
              : "EMAIL",
        };
        set({ user: appUser, loading: false });
      } else {
        set({ user: undefined, loading: false });
      }
    });
  },
}));
