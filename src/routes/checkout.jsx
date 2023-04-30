import { useContext } from "react"
import { CartContext } from "../context/cart-context"

import Checkout from "../components/Checkout"

import '../components/Checkout/checkout-item.scss'

const CheckoutPage = () => {
  const { cartList, totalValueCart } = useContext(CartContext)

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
        </div>
        {cartList.map((product) => (
          <Checkout key={product.id} products={product} />
        ))}
        <div className='total'>TOTAL: ${totalValueCart}</div>
  </div>
  )
}

export default CheckoutPage