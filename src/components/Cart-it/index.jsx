import { CartItemContainer, ItemDetails, Name } from "./cart-item"

const CartItem = ({products}) => {
  return (
    <div>
      {products.map(({ id, name, quantity, imageUrl, price}) => <CartItemContainer key={id} className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails className='item-details'>
        <Name className='name'>{name}</Name>
        <span className='price'>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>)}
    </div>
  )
}

export default CartItem