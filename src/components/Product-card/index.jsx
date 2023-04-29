import Button from "../Button"

import './prod-card.scss'

const ProductCard = ({products}) => {
  const { name, price, imageUrl} = products;

  return (
    <div className="product-card-container ">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType='inverted'>Add to cart</Button>
    </div>
  )
}

export default ProductCard