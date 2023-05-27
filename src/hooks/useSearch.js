import { useState, useEffect, useRef } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)
  const previousInput = useRef(search)

  const updateQuery = (newQuery) => {
    if (newQuery.startsWith(' ')) return
    setSearch(newQuery)
  }

  useEffect(() => {
    if (previousInput) {
      previousInput.current = search === ''
      return
    }

    if (search === '') {
      setError(true)
      return
    }

    setError(false)
  }, [search])

  return { search, updateQuery, inputError: error }
}
