import { calculateTotal } from '../../calculateTotal.js'
import { CartItem } from './CartItem'
import { useContext } from 'react'
import { CartContext } from '../../burguerStore/storeContext'
import { UserProgressContext } from '../../burguerStore/userProgress'

export function Cart() {
  const { cartOrders } = useContext(CartContext)
  const { handleCloseModal, handleCheckout } = useContext(UserProgressContext)

  let total = calculateTotal(cartOrders)
  let isCartEmpty = false

  if (cartOrders.length === 0) {
    isCartEmpty = true
  }

  return (
    <div className="cart">
      <h2>Your Orders</h2>
      {!isCartEmpty && (
        <>
          <ul>
            {cartOrders.map((item) => {
              return (
                <li key={item.food.id} className="cart-item">
                  <CartItem meal={item.food} numbOrders={item.items} />
                </li>
              )
            })}
          </ul>
          <div className="cart-total">
            <p>${total.toFixed(2)}</p>
          </div>
        </>
      )}
      {isCartEmpty && <p>Your Cart is empty</p>}
      <div className="modal-actions ">
        <button className="text-button" onClick={handleCloseModal}>
          <p>Cancel</p>
        </button>
        <button
          className="button"
          onClick={() => {
            handleCheckout('checkout')
          }}
          disabled={isCartEmpty}
        >
          Checkout
        </button>
      </div>
    </div>
  )
}
