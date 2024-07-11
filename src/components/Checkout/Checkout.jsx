import { calculateTotal } from '../../calculateTotal'
import { Input } from '../UI/Input'
import { fetchOrdersFood } from '../../https.js'
import { useState, useContext } from 'react'

import { CartContext } from '../../burguerStore/storeContext'
import { UserProgressContext } from '../../burguerStore/userProgress.jsx'

export function Checkout() {
  const { cartOrders, handleClearCart } = useContext(CartContext)
  const { handleCloseModal, handleCheckout } = useContext(UserProgressContext)
  const [error, setError] = useState()

  let total = calculateTotal(cartOrders)

  async function handleSubmit(event) {
    event.preventDefault()

    const fd = new FormData(event.target)
    const data = Object.fromEntries(fd.entries())
    try {
      const message = await fetchOrdersFood({
        items: cartOrders,
        customer: data,
      })
      console.log(message)
      handleClearCart()
      handleCheckout('orderCreated')
    } catch (error) {
      console.log(error)
      setError(error)
    }
  }

  return (
    <div className="cart">
      <h2>Checkout</h2>
      <p>Total Amount: ${total.toFixed(2)}</p>
      {error && <h2>{error.message}</h2>}
      <form onSubmit={handleSubmit} className="control">
        <Input type="text" label="Full-Name" id="name" name="name" />
        <Input type="text" label="E-Mail Address" id="email" name="email" />
        <Input type="text" label="Street" id="street" name="street" />
        <div className="control-row">
          <Input
            type="number"
            label="Postal Code"
            id="postal-code"
            name="postal-code"
          />
          <Input type="text" label="City" id="city" name="city" />
        </div>
        <div className="modal-actions">
          <button className="text-button" onClick={handleCloseModal}>
            <p>Cancel</p>
          </button>
          <button className="button">Submit Order</button>
        </div>
      </form>
    </div>
  )
}
