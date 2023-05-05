import { CART_ACTIONS_TYPE } from "./cart.types"

const INITIAL_STATE = {
  showDropdown: false,
  cartList: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload} = action

  const {
    SET_SHOW_DROP_DOWN,
    SET_CART_LIST,
  } = CART_ACTIONS_TYPE

  switch (type) {
    case SET_SHOW_DROP_DOWN:
      return {
        ...state,
        showDropdown: payload
      }
    case SET_CART_LIST:
      return {
        ...state,
        cartList: payload
      }
    default:
      return state
  }
}
