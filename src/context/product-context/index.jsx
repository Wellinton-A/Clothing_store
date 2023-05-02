import { createContext, useEffect, useState } from "react";

import { addCollectionAndDocument, getCollectionAndDocument } from "../../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
  products: []
})

const CategoriesProvider = (props) => {
  const [ categoriesMap, setCategoriesMap ] = useState({});


  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCollectionAndDocument()
      setCategoriesMap(categoryMap)
    }
    getCategoryMap()
  }, [])

  console.log(categoriesMap)


  return (
    <CategoriesContext.Provider value={{ categoriesMap }} > {props.children} </CategoriesContext.Provider>
  )
}

export default CategoriesProvider