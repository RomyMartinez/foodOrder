export function calculateTotal(orders) {
  return orders.reduce((total, item) => {
    return item.food.price * item.items + total
  }, 0)
}
