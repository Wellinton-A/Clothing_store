import './cart-item.scss'

const CartItem = ({products}) => {
  return (
    <div>
      {products.map(({ id, name, quantity, imageUrl, price}) => <div key={id} className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </div>
    </div>)}
    </div>
  )
}

export default CartItem