import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  categories: []
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: INITIAL_STATE,
  reducers: {
    setCategories (state, actions) {
      state.categories = actions.payload
    }
  }
})

export const { setCategories } = categoriesSlice.actions
export const categoriesReducer = categoriesSlice.reducer