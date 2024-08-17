// /* <h1>You got this 💪</h1>
// <p>Stuck? Not sure how to proceed?</p>
// <p>Don't worry - we've all been there. Let's build it together!</p> */
import { useContext } from 'react'

import { Header } from './components/Header'
import { fetchAvailableFood } from './https'
import { CardFoods } from './components/FoodsView/CardFoods'
import { Error } from './components/UI/Error'
import { CartContext, CartProvider } from './burguerStore/storeContext'
import { UserProgressProvider } from './burguerStore/userProgress'

import { useFetch } from './hooks.jsx/useFetch'

function App() {
  const { cartOrders } = useContext(CartContext)

  const {
    fetchingData: availableFoods,
    error,
    isLoading,
  } = useFetch([], fetchAvailableFood, 'Error Loading Food Menu')

  console.log(cartOrders)

  return (
    <CartProvider>
      <UserProgressProvider>
        <Header />
        {isLoading && <p>loading menu</p>}
        {error && <Error message={error.message} />}
        {!error && <CardFoods foods={availableFoods} />}
      </UserProgressProvider>
    </CartProvider>
  )
}

export default App
