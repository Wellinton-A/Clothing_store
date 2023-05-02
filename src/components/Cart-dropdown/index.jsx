import { useContext } from "react"
import Button from "../Button"
import CartItem from "../Cart-item"

import './cart-drop.scss'
import { CartContext } from "../../context/cart-context"
import { useNavigate } from "react-router-dom"

const CartDropdown = () => {
  const { cartList } = useContext(CartContext)
  const navigate = useNavigate();

  const navigateCheckoutHandler = () => {
    navigate('/Checkout')
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <CartItem products={cartList} />
      </div>
      <Button onClick={navigateCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown