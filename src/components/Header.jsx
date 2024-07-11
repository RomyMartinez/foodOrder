import reactFood from '../assets/logo.jpg'
import { CartContext } from '../burguerStore/storeContext'
import { UserProgressContext } from '../burguerStore/UserProgress'
import { useContext } from 'react'

export function Header() {
  const { cartOrders } = useContext(CartContext)
  const { handleOpenModal } = useContext(UserProgressContext)

  return (
    <div id="main-header">
      <header id="title">
        <img src={reactFood} alt="" />
        <h1>REACTFOOD</h1>
      </header>
      <button onClick={handleOpenModal} className="text-button">
        <p>Cart ({cartOrders.length})</p>
      </button>
    </div>
  )
}
