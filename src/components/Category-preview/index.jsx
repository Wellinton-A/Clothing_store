import { Link } from 'react-router-dom'
import ProductCard from '../Product-card'

import './category-preview.scss'

const CategoryPreview = ({title, products}) => {

  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={title} className='title'>{ title.toUpperCase() }</Link>
      </h2>
      <div className='preview'>
        {
          products
            .filter(( _, idx) => idx < 4)
            .map((products) => (
              <ProductCard key={products.id} products={products}/>
            ))
        }
      </div>
    </div>
  )
}

export default CategoryPreview