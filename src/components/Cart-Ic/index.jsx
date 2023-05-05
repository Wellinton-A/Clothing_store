import { useDispatch, useSelector } from "react-redux"

import { selectCartList, selectShowDropdown } from "../../store/cart/cart.selector"
import { quantItemCart, setShowDropdown } from "../../store/cart/cart.actions"

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon"

const  CardIcon = () => {
  const dispatch = useDispatch()
  const showDropdown = useSelector(selectShowDropdown)
  const cartList = useSelector(selectCartList)

  const quantityItemCart = quantItemCart(cartList)

  const toggleCart = () => {
    dispatch(setShowDropdown(!showDropdown))
  }

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{ quantityItemCart }</ItemCount>
    </CartIconContainer>
  )
}

export default CardIcon