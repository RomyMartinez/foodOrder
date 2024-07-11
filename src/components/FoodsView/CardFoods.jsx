import { Card } from './Card'

export function CardFoods({ foods }) {
  return (
    <ul id="meals">
      {foods.map((item) => {
        return (
          <li key={item.id} className="meal-item">
            <Card meal={item} />
          </li>
        )
      })}
    </ul>
  )
}
