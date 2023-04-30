import { useContext } from "react"
import { ReactComponent as CartIconSVG } from "../../assets/shopping-bag.svg"

import { CartContext } from "../../context/cart-context"

import './cart-icon.scss'

const  CardIcon = () => {
  const { showDropdown, setShowDropdown } = useContext(CartContext)
  const { quantItemCart } = useContext(CartContext)

  const toggleCart = () => {
    setShowDropdown(!showDropdown)
  }

  return (
    <div onClick={toggleCart} className="cart-icon-container">
      <CartIconSVG className="shopping-icon" />
      <span className="item-count">{ quantItemCart }</span>
    </div>
  )
}

export default CardIcon