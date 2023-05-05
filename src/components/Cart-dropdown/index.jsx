import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { selectCartList } from "../../store/cart/cart.selector"
import CartItem from "../Cart-it"

import { ButtonBaseCart, CartDropdownContainer, CartItems } from "./cart-drop"

const CartDropdown = () => {
  const cartList = useSelector(selectCartList)
  const navigate = useNavigate();

  const navigateCheckoutHandler = () => {
    navigate('/Checkout')
  }
  return (
    <CartDropdownContainer className="cart-dropdown-container">
      <CartItems className="cart-items">
        <CartItem products={cartList} />
      </CartItems>
      <ButtonBaseCart onClick={navigateCheckoutHandler}>GO TO CHECKOUT</ButtonBaseCart>
    </CartDropdownContainer>
  )
}

export default CartDropdown