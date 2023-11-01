import { ShoppingCartProviderProps } from "@/@types";
import { createContext, useContext } from "react";

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
 return useContext(ShoppingCartContext)
}

export function ShoppingProvider({ children }: ShoppingCartProviderProps) {
 return (
  <ShoppingCartContext.Provider value={{}}>
    {children}
  </ShoppingCartContext.Provider>
 )
}