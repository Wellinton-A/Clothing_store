import { CATEGORIES_ACTIONS_TYPES } from "./category.types";

export const setCategories = (categoriesArray) =>
  ({type: CATEGORIES_ACTIONS_TYPES.SET_CATEGORIES, payload: categoriesArray})