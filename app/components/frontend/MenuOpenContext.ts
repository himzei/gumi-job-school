import { createContext } from "react";

interface MenuOpenContextType {
  menuOpen: boolean;
  setMenuOpen: any;
  setMenuContent: any;
}

export const MenuOpenContext = createContext<MenuOpenContextType | undefined>(
  undefined
);
