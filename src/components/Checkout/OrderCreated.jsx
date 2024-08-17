import { useContext } from 'react'
import { UserProgressContext } from '../../burguerStore/userProgress'

export function OrderCreated() {
  const { handleCheckout } = useContext(UserProgressContext)
  return (
    <div className="cart">
      <h2>Success!</h2>
      <p>Your order was submitted succesfuly</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes
      </p>
      <button className="button" onClick={() => handleCheckout('')}>
        Okay
      </button>
    </div>
  )
}
