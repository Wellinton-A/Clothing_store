import { CATEGORIES_ACTIONS_TYPES } from "./category.types"

const INITIAL_STATE = {
  categories: []
}

export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  const { SET_CATEGORIES } = CATEGORIES_ACTIONS_TYPES

  switch(type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: payload
      }
    default:
      return state
  }
}