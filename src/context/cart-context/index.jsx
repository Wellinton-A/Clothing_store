import { createContext, useReducer } from "react";

export const CartContext = createContext({
  showDropdown: false,
  setShowDropdown: () => null,
  cartList: [],
  addItemToCart: () => null,
  quantItemCart: null,
  increaseItem: () => null,
  decreaseItem: () => null,
  removeFromCart: () => null,
  totalValueCart: null,
})

export const CART_ACTIONS_TYPE = {
  SET_SHOW_DROP_DOWN: 'SET_SHOW_DROP_DOWN',
  SET_CART_LIST: 'SET_CART_LIST'
}

const cartReducer = (state, action) => {
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
      throw new Error(`Unhandled type ${type}`)
  }
}

const INITIAL_STATE = {
  showDropdown: false,
  cartList: []
}

const CartProvider = ({children}) => {
  const [{ showDropdown, cartList}, dispatch ] = useReducer(cartReducer, INITIAL_STATE)

  const {
    SET_SHOW_DROP_DOWN,
    SET_CART_LIST,
  } = CART_ACTIONS_TYPE

  const setShowDropdown = (show) => {
    dispatch({type: SET_SHOW_DROP_DOWN, payload: show})
  }

  const updateCartItems = (list) => {
    dispatch({type: SET_CART_LIST, payload: list})
  }

  const addItemToCart = (addedItem) => {
    const isInCart = cartList.some((item) => item.id === addedItem.id);
    if (isInCart) {
      const newCartList = cartList.map((item) => {
        if (item.id === addedItem.id) {
          return {...item, quantity: item.quantity + 1}
        }
        return item
      })
      updateCartItems(newCartList)
    } else {
      updateCartItems([...cartList, {...addedItem, quantity: 1}])
    }
  }

  const increaseItem = (product) => {
    const newCartList = cartList.map((item) => {
      if(item.id === product.id) {
        return {...item, quantity: item.quantity + 1}
      }
      return item
    })
    updateCartItems(newCartList)
  }

  const decreaseItem = (product) => {
    const newCartList = cartList.map((item) => {
      if(item.id === product.id && item.quantity > 1) {
        return {...item, quantity: item.quantity - 1}
      }
      return item
    })
    updateCartItems(newCartList)
  }

  const removeFromCart = (product) => {
    const newCartList = cartList.filter((item) => {
      return item.id !== product.id
    })
    updateCartItems(newCartList)
  }

  const quantItemCart = cartList.reduce((acc, item) => acc + item.quantity, 0)
  const totalValueCart = cartList.reduce((total, obj) => {
    return total + (obj.quantity * obj.price)
  },0)

  const value = {
    showDropdown,
    setShowDropdown,
    cartList,
    addItemToCart,
    quantItemCart,
    increaseItem,
    decreaseItem,
    removeFromCart,
    totalValueCart
  }

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

export default CartProvider