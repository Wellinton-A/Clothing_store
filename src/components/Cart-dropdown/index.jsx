import { useContext } from "react"
import Button from "../Button"
import CartItem from "../cart-item"

import './cart-drop.scss'
import { CartContext } from "../../context/cart-context"

const CartDropdown = () => {
  const { cartList } = useContext(CartContext)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <CartItem products={cartList} />
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown