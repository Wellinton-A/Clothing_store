import { Fragment, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { CategoriesContext } from "../context/product-context"

import ProductCard from "../components/Product-card"

import { CategoryContainer, CategoryTitle } from "../components/Category/category"

const Category = () => {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [ products, setProducts ] = useState(categoriesMap[category])

  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  console.log(products)

  return(
    <Fragment>
    <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
    <CategoryContainer className='category-container'>
      {products &&
        products.map((item) => (
          <ProductCard key={item.id} products={item} />
        ))}
    </CategoryContainer>
  </Fragment>
  )
}

export default Category