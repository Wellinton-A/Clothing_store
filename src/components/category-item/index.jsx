import './category-item.scss'

const CategoryItem = ({ categories, className }) => {

  return (
    <div className={className}>
      {categories.map((item) => <div key={item.id} className='category-item'>
        <div className="background-image" style={{backgroundImage: `url(${item.imageUrl})`}}/>
        <div className="category-body-container">
          <h2>
            {item.title}
          </h2>
          <p>Shop Now</p>
        </div>
      </div>)}
    </div>
  )
}

export default CategoryItem