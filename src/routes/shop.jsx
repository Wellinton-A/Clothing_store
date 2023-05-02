import { Route, Routes } from 'react-router-dom'

import CategoriesPreview from '../components/Categories-preview'
import Category from './category'

const Shop = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}/>
      <Route path=':category' element={<Category />}/>
    </Routes>
  )
}

export default Shop