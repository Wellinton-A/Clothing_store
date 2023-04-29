import { createContext, useState } from "react";

export const CartContext = createContext({
  showDropdown: false,
  setShowDropdown: () => null
})

const CartProvider = ({children}) => {
  const [ showDropdown, setShowDropdown ] = useState(false);

  return (
    <CartContext.Provider value={{showDropdown, setShowDropdown}}>{children}</CartContext.Provider>
  )
}

export default CartProvider