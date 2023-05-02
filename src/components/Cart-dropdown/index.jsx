import { useContext } from "react"
import CartItem from "../Cart-item"

import { CartContext } from "../../context/cart-context"
import { useNavigate } from "react-router-dom"
import { ButtonBaseCart, CartDropdownContainer, CartItems } from "./cart-drop"

const CartDropdown = () => {
  const { cartList } = useContext(CartContext)
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