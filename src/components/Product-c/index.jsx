import { useDispatch, useSelector } from "react-redux";

import Button from "../Button"
import { selectCartList } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.actions";

import { Footer, ProductCardContainer } from "./prod-card";



const ProductCard = ({products}) => {
  const { name, price, imageUrl} = products;

  const dispatch = useDispatch()

  const cartList = useSelector(selectCartList)

  const handleItem = () => dispatch(addItemToCart(products, cartList))

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