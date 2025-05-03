import { create } from "zustand";

interface RoleStore {
  isClient: boolean;
  toggleRole: () => void;
}

export const useRoleStore = create<RoleStore>((set) => ({
  isClient: true,
  toggleRole: () => set((state) => ({ isClient: !state.isClient })),
}));
