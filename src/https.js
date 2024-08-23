export async function fetchAvailableFood() {
  const response = await fetch(
    'https://food-order-back-hd633wus6-romy-martinezs-projects.vercel.app/meals'
  )
  const responseData = await response.json()

  if (!response.ok) {
    throw new Error('Failed to load Menu')
  }

  return responseData
}

export async function fetchOrdersFood(order) {
  const response = await fetch(
    'https://food-order-back-hd633wus6-romy-martinezs-projects.vercel.app/orders',
    {
      method: 'POST',
      body: JSON.stringify({ order }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const resData = await response.json()

  if (!response.ok) {
    throw new Error(resData.message)
  }

  return resData.message
}
