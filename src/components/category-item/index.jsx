import { useNavigate } from "react-router-dom"
import { BackgroundImage, CategoryBodyContainer, CategoryItemContainer } from "./category-item"

const CategoryItem = ({ categories, className }) => {
  const navigate = useNavigate()
  return (
    <div className={className}>
      {categories.map((item) => <CategoryItemContainer onClick={() => navigate(item.route)} key={item.id}>
        <BackgroundImage style={{backgroundImage: `url(${item.imageUrl})`}}/>
        <CategoryBodyContainer >
          <h2>
            {item.title}
          </h2>
          <p>Shop Now</p>
        </CategoryBodyContainer>
      </CategoryItemContainer>)}
    </div>
  )
}

export default CategoryItem