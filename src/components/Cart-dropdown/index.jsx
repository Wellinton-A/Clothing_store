import Button from "../Button"

import './cart-drop.scss'

const CartDropdown = () => {

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"/>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown