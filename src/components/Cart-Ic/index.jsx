import { useContext } from "react"

import { CartContext } from "../../context/cart-context"

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon"

const  CardIcon = () => {
  const { showDropdown, setShowDropdown } = useContext(CartContext)
  const { quantItemCart } = useContext(CartContext)

  const toggleCart = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{ quantItemCart }</ItemCount>
    </CartIconContainer>
  )
}

export default CardIcon