import Checkout from "../components/Checkout"

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "../components/Checkout/checkout-item"
import { useSelector } from "react-redux"
import { selectCartList } from "../store/cart/cart.selector"
import { totalValueCart } from "../store/cart/cart.actions"

const CheckoutPage = () => {
  const cartList = useSelector(selectCartList)

  const total = totalValueCart(cartList)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
        </CheckoutHeader>
        {cartList.map((product) => (
          <Checkout key={product.id} products={product} />
        ))}
        <Total>TOTAL: ${total}</Total>
  </CheckoutContainer>
  )
}

export default CheckoutPage