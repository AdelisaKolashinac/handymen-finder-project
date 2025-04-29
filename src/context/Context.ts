import { createContext, useContext } from "react";

export interface ContextType {
  isClient: boolean;
  handleSwitch: () => void;
}

export const RoleContext = createContext({} as ContextType);
export const useRoleContext = () => useContext(RoleContext);
