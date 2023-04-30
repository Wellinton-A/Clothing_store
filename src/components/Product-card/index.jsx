import { useContext } from "react";
import Button from "../Button"

import { CartContext } from "../../context/cart-context";

import './prod-card.scss'


const ProductCard = ({products}) => {
  const { name, price, imageUrl} = products;

  const { addItemToCart } = useContext(CartContext)

  const handleItem = () => addItemToCart(products)

  return (
    <div className="product-card-container ">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={handleItem} buttonType='inverted'>Add to cart</Button>
    </div>
  )
}

export default ProductCard