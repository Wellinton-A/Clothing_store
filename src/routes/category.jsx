import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import ProductCard from "../components/Product-c"

import { CategoryContainer, CategoryTitle } from "../components/Category/category"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../store/category/category.selector"

const Category = () => {
  const { category } = useParams()
  console.log('RENDER/RE-RENDERING CATEGORY COMPONENT')
  const categories = useSelector(selectCategoriesMap)
  const [ products, setProducts ] = useState(categories[category])
  console.log(products)


  useEffect(() => {
    console.log('EFFECT FIRED SETTING NEW PRODUCT')
    setProducts(categories[category])
  }, [category, categories])

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