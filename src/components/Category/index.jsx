import CategoryItem from '../Category-item'
import './category.scss'

const Category = ({ categories }) => {

  return (
    <CategoryItem categories={categories} className='categories-container'/>
  )
}

export default Category