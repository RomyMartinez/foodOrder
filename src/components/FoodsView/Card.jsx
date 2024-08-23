import { useContext } from 'react'
import { CartContext } from '../../burguerStore/storeContext'

export function Card({ meal }) {
  const { handleAddCart } = useContext(CartContext)
  return (
    <article>
      <img
        src={`https://food-order-blue.vercel.app/images/${meal.image}`}
        alt={meal.title}
      />
      <div>
        <h3>{meal.title}</h3>
        <p className="meal-item-price">{meal.price}</p>
        <p className="meal-item-description">{meal.description}</p>
      </div>
      <p className="meal-item-actions">
        <button className="button" onClick={() => handleAddCart(meal)}>
          Add to cart
        </button>
      </p>
    </article>
  )
}
