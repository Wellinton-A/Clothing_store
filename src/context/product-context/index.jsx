import { createContext, useState } from "react";

import PRODUCTS from '../../assets/shop-data.json'

export const ProductContext = createContext({
  products: []
})

const ProductsProvider = (props) => {
  const [ products, setProducts ] = useState(PRODUCTS);


  return (
    <ProductContext.Provider value={{ products }} > {props.children} </ProductContext.Provider>
  )
}

export default ProductsProvider