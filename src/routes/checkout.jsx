import { useContext } from "react"
import { CartContext } from "../context/cart-context"

import Checkout from "../components/Checkout"

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "../components/Checkout/checkout-item"

const CheckoutPage = () => {
  const { cartList, totalValueCart } = useContext(CartContext)

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
        <Total>TOTAL: ${totalValueCart}</Total>
  </CheckoutContainer>
  )
}

export default CheckoutPage