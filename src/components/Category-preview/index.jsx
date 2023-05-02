import ProductCard from '../Product-card'

import { CategoryPreviewContainer, Preview, Title, TitleLink } from './category-preview.js'

const CategoryPreview = ({title, products}) => {

  return (
    <CategoryPreviewContainer>
      <Title>
        <TitleLink to={title} className='title'>{ title.toUpperCase() }</TitleLink>
      </Title>
      <Preview className='preview'>
        {
          products
            .filter(( _, idx) => idx < 4)
            .map((products) => (
              <ProductCard key={products.id} products={products}/>
            ))
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview