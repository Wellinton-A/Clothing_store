import { useContext } from "react";
import Button from "../Button"

import { CartContext } from "../../context/cart-context";
import { Footer, ProductCardContainer } from "./prod-card";



const ProductCard = ({products}) => {
  const { name, price, imageUrl} = products;

  const { addItemToCart } = useContext(CartContext)

  const handleItem = () => addItemToCart(products)

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button onClick={handleItem} buttonType='inverted'>Add to cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard