import { useContext } from "react"
import { CartContext } from "../../context/cart-context"

import './checkout-item.scss'


const Checkout = ({products}) => {

  const { name, quantity, price, imageUrl } = products

  const { increaseItem, decreaseItem, removeFromCart } = useContext(CartContext)

  const increase = () => increaseItem(products)
  const decrease = () => decreaseItem(products)
  const remove = () => removeFromCart(products)

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={decrease}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={increase}>
          &#10095;
        </div>
      </span>
      <span className='price'> {price}</span>
      <div className='remove-button' onClick={remove}>
        &#10005;
      </div>
    </div>
  )
}

export default Checkout