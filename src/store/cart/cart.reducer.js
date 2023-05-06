import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  showDropdown: false,
  cartList: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    setCartList (state, actions) {
      state.cartList = actions.payload
    },
    setShowDropdown (state, actions) {
      state.showDropdown = actions.payload

    }
  }
})

export const { setCartList } = cartSlice.actions
export const { setShowDropdown } = cartSlice.actions

export const cartReducer = cartSlice.reducer
