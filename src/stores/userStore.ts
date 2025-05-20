import { create } from "zustand";
import { User } from "../types/types";
import {
  onAuthStateChanged,
  signOut,
  User as FirebaseUser,
} from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";

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
        const userDocRef = doc(db, "users", firebaseUser.uid);

        // Listen for changes in Firestore user document
        onSnapshot(userDocRef, (docSnap) => {
          const firestoreUser = docSnap.data() || {};

          set({
            user: {
              id: firebaseUser.uid,
              email: firebaseUser.email || "",
              fullname:
                firestoreUser.fullname || firebaseUser.displayName || "",
              phone: firestoreUser.phone || firebaseUser.phoneNumber || "",
              location: firestoreUser.location || "",
              notifyEmail: firestoreUser.notifyEmail ?? false,
              notifySMS: firestoreUser.notifySMS ?? false,
              type: "CLIENT",
              provider:
                firebaseUser.providerData[0]?.providerId === "google.com"
                  ? "GOOGLE"
                  : "EMAIL",
            },
            loading: false,
          });
        });
      } else {
        set({ user: undefined, loading: false });
      }
    });
  },
}));
