import { useContext } from "react"
import { CartContext } from "../../context/cart-context"

import {
  CheckoutArrow,
  CheckoutItemContainer,
  CheckoutName,
  CheckoutPrice,
  CheckoutQuantity,
  CheckoutValue,
  ImageContainer,
  RemoveButton
} from "./checkout-item.js"


const Checkout = ({products}) => {

  const { name, quantity, price, imageUrl } = products

  const { increaseItem, decreaseItem, removeFromCart } = useContext(CartContext)

  const increase = () => increaseItem(products)
  const decrease = () => decreaseItem(products)
  const remove = () => removeFromCart(products)

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <CheckoutName> {name} </CheckoutName>
      <CheckoutQuantity className='quantity'>
        <CheckoutArrow onClick={decrease}>
          &#10094;
        </CheckoutArrow>
        <CheckoutValue>{quantity}</CheckoutValue>
        <CheckoutArrow onClick={increase}>
          &#10095;
        </CheckoutArrow>
      </CheckoutQuantity>
      <CheckoutPrice> {price}</CheckoutPrice>
      <RemoveButton onClick={remove}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  )
}

export default Checkout