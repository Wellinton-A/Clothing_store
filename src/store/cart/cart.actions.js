import { CART_ACTIONS_TYPE } from "./cart.types"

const { SET_CART_LIST, SET_SHOW_DROP_DOWN } = CART_ACTIONS_TYPE

export const setShowDropdown = (show) =>
  ({type: SET_SHOW_DROP_DOWN, payload: show})

export const addItemToCart = (addedItem, cartList) => {
  const isInCart = cartList.some((item) => item.id === addedItem.id);
  if (isInCart) {
    const newCartList = cartList.map((item) => {
      if (item.id === addedItem.id) {
        return {...item, quantity: item.quantity + 1}
      }
      return item
    })
    return ({type: SET_CART_LIST, payload: newCartList})
  } else {
    return ({type: SET_CART_LIST, payload: [...cartList, {...addedItem, quantity: 1}]})
  }
}

export const increaseItem = (product, cartList) => {
  const newCartList = cartList.map((item) => {
    if(item.id === product.id) {
      return {...item, quantity: item.quantity + 1}
    }
    return item
  })
  return ({type: SET_CART_LIST, payload: newCartList})
}

export const decreaseItem = (product, cartList) => {
  const newCartList = cartList.map((item) => {
    if(item.id === product.id && item.quantity > 1) {
      return {...item, quantity: item.quantity - 1}
    }
    return item
  })
  return ({type: SET_CART_LIST, payload: newCartList})
}

export const removeFromCart = (product, cartList) => {
  const newCartList = cartList.filter((item) => {
    return item.id !== product.id
  })
  return ({type: SET_CART_LIST, payload: newCartList})
}

export const quantItemCart = (cartList) => cartList.reduce((acc, item) => acc + item.quantity, 0)
export const totalValueCart = (cartList) => cartList.reduce((total, obj) => {
  return total + (obj.quantity * obj.price)
},0)