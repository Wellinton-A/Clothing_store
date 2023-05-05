import { Fragment } from "react"
import CategoryPreview from '../Category-prev'
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/category/category.selector"

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap)

  console.log(categories)

  return (
    <Fragment>
      {Object.keys(categories).map((title) => {
        const products = categories[title]
        return (
        <CategoryPreview key={title} title={title} products={products} />
      )
  })}
    </Fragment>
  )
}

export default CategoriesPreview