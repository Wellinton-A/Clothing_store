import { useNavigate } from "react-router-dom"

import { BackgroundImage, CategoryBodyContainer, CategoryItemContainer } from "./category-item"

const CategoryItem = ({ categories }) => {
  const { imageUrl, title, route } = categories
  const navigate = useNavigate()

  const navigateHandler = () => navigate(route)

  return (
      <CategoryItemContainer onClick={navigateHandler}>
        <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}}/>
        <CategoryBodyContainer >
          <h2>
            {title}
          </h2>
          <p>Shop Now</p>
        </CategoryBodyContainer>
      </CategoryItemContainer>
  )
}

export default CategoryItem