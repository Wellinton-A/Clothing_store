import { createContext, useState } from "react";

export const CartContext = createContext({
  showDropdown: false,
  setShowDropdown: () => null,
  cartList: [],
  addItemToCart: () => null,
  quantItemCart: null,
  increaseItem: () => null,
  decreaseItem: () => null,
  removeFromCart: () => null,
  totalValueCart: () => null
})

const CartProvider = ({children}) => {
  const [ showDropdown, setShowDropdown ] = useState(false);
  const [ cartList, setCartList ] = useState([]);

  const addItemToCart = (addedItem) => {
    const isInCart = cartList.some((item) => item.id === addedItem.id);
    if (isInCart) {
      const newCartList = cartList.map((item) => {
        if (item.id === addedItem.id) {
          return {...item, quantity: item.quantity + 1}
        }
        return item
      })
      setCartList(newCartList)
    } else {
      setCartList([...cartList, {...addedItem, quantity: 1}])
    }
  }

  const quantItemCart  = cartList.reduce((acc, item) => acc + item.quantity, 0)

  const increaseItem = (product) => {
    const newCartList = cartList.map((item) => {
      if(item.id === product.id) {
        return {...item, quantity: item.quantity + 1}
      }
      return item
    })
    setCartList(newCartList)
  }

  const decreaseItem = (product) => {
    const newCartList = cartList.map((item) => {
      if(item.id === product.id && item.quantity > 1) {
        return {...item, quantity: item.quantity - 1}
      }
      return item
    })
    setCartList(newCartList)
  }

  const removeFromCart = (product) => {
    const newCartList = cartList.filter((item) => {
      return item.id !== product.id
    })
    setCartList(newCartList)
  }

  const totalValueCart = cartList.reduce((total, obj) => {
    console.log('passou aqui')
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