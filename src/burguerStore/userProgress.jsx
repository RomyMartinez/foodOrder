import { createContext, useState } from 'react'
import { Modal } from '../components/UI/Modal.jsx'
import { Cart } from "../components/Checkout/Cart.jsx";
import { Checkout } from "../components/Checkout/Checkout.jsx";
import { OrderCreated } from "../components/Checkout/OrderCreated.jsx";

export const UserProgressContext = createContext({
  phase: '',
  handleCheckout: () => {},
  handleCloseModal: () => {},
  handleOpenModal: () => {},
})

export function UserProgressProvider({ children }) {
  const [isModalOpen, setModalIsOpen] = useState(false)
  const [phase, setPhase] = useState('')

  function handleCheckout(phases) {
    if (phases === '') {
      handleCloseModal()
      return
    }
    setPhase(phases)
  }

  function handleCloseModal() {
    setModalIsOpen(false)
    setPhase('')
  }

  function handleOpenModal() {
    setModalIsOpen(true)
    setPhase('cart')
  }

  let modalContent = null

  if (isModalOpen && phase === 'cart') {
    modalContent = <Cart />
  } else if (phase === 'checkout') {
    modalContent = <Checkout />
  } else if (phase === 'orderCreated') {
    modalContent = <OrderCreated />
  }

  const ctxValue = {
    phase,
    handleCheckout,
    handleCloseModal,
    handleOpenModal,
  }

  return (
    <UserProgressContext.Provider value={ctxValue}>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        {modalContent}
      </Modal>
      {children}
    </UserProgressContext.Provider>
  )
}
