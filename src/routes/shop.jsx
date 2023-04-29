import { useContext } from "react"
import { ProductContext } from "../context/product-context"
import ProductCard from "../components/Product-card"

import '../components/Product-card/prod-card.scss'

const Shop = () => {
  const { products } = useContext(ProductContext)

  return (
    <div className="products-container">
      {
        products.map((product) =>
        <ProductCard key={product.id} products={product} />
      )}
    </div>
  )
}

export default Shop