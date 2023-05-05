import { createSelector } from "reselect"

const selectCartReducer = (state) => state.cart

export const selectCartList = createSelector(
  [selectCartReducer],
  (cart) => cart.cartList)

export const selectShowDropdown = createSelector(
  [selectCartReducer],
  (cart) => cart.showDropdown)