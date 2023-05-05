import { useDispatch, useSelector } from "react-redux"

import { selectCartList } from "../../store/cart/cart.selector.js"
import { decreaseItem, increaseItem, removeFromCart } from "../../store/cart/cart.actions.js"

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
  const dispatch = useDispatch()
  const { name, quantity, price, imageUrl } = products

  const cartList = useSelector(selectCartList)

  const increase = () => dispatch(increaseItem(products, cartList))
  const decrease = () => dispatch(decreaseItem(products, cartList))
  const remove = () => dispatch(removeFromCart(products, cartList))

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