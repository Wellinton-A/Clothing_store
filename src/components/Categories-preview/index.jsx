import { Fragment, useContext } from "react"
import { CategoriesContext } from "../../context/product-context"
import CategoryPreview from '../Category-prev'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return (
        <CategoryPreview key={title} title={title} products={products} />
      )
  })}
    </Fragment>
  )
}

export default CategoriesPreview