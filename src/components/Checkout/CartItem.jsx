import { useContext } from 'react'
import { CartContext } from '../../burguerStore/storeContext'

export function CartItem({ meal, numbOrders }) {
  const { handleAddCart, handleRemoveOrder } = useContext(CartContext)
  return (
    <>
      <div>
        <p>
          {meal.name} - {meal.price}
        </p>
      </div>
      <div className="cart-item-actions">
        <button onClick={() => handleAddCart(meal)}>+</button>
        <p>{numbOrders}</p>
        <button onClick={() => handleRemoveOrder(meal.id)}>-</button>
      </div>
    </>
  )
}
