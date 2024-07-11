import { useState, useEffect } from 'react'

export function useFetch(initialValue, fetchFn, errorMessage) {
  const [fetchingData, setFetchingData] = useState(initialValue)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    async function fetching() {
      setIsLoading(true)
      try {
        const fetchData = await fetchFn()
        setFetchingData(fetchData)
      } catch (error) {
        setError({ message: error.message || errorMessage })
      }
      setIsLoading(false)
    }
    fetching()
  }, [fetchFn])

  return { fetchingData, error, isLoading }
}
