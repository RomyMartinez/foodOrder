import { createContext } from 'react'
import { useState } from 'react'

export const CartContext = createContext({
  cartOrders: [],
  handleAddCart: () => {},
  handleRemoveOrder: () => {},
  handleClearCart: () => {},
})

export function CartProvider({ children }) {
  const [cartOrders, setCartOrders] = useState([])

  function handleAddCart(meal) {
    setCartOrders((prevOrders) => {
      if (!prevOrders) {
        prevOrders = []
      }

      if (prevOrders.some((item) => item.food.id === meal.id)) {
        prevOrders = [
          ...prevOrders.map((item) => {
            if (item.food.id === meal.id) {
              return {
                ...item,
                items: item.items + 1,
              }
            }
            return { ...item }
          }),
        ]
        return [...prevOrders]
      }

      const newOrder = {
        food: meal,
        items: 1,
      }

      return [...prevOrders, newOrder]
    })
  }

  function handleRemoveOrder(itemId) {
    setCartOrders((prevOrders) => {
      if (!prevOrders) {
        prevOrders = []
      }
      if (prevOrders.some((item) => item.food.id === itemId)) {
        prevOrders = prevOrders.map((item) => {
          if (item.food.id === itemId && item.items >= 0) {
            return {
              ...item,
              items: item.items - 1,
            }
          }
          return { ...item }
        })
        return [
          ...prevOrders.filter(
            (item) => !(item.items === 0 && item.food.id === itemId)
          ),
        ]
      }
    })
  }

  function handleClearCart() {
    setCartOrders([])
  }

  const ctxValue = {
    cartOrders,
    handleAddCart,
    handleRemoveOrder,
    handleClearCart,
  }

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  )
}
