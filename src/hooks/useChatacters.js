import { useRef, useState, useMemo, useCallback } from 'react'

import { getCharactersService } from '../services/character'

export function useCharacters ({ search, sort }) {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const previousSearches = useRef(search)

  const getCharaters = useCallback(async ({ search }) => {
    if (search === previousSearches.current) return

    try {
      setLoading(true)
      setError(false)
      previousSearches.current = search
      const characters = await getCharactersService({ search })
      setCharacters(characters)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedCharacters = useMemo(() => {
    // if there's no characters
    if (characters === null) return []; 
    return sort
      ? [...characters].filter((character) => character.status === 'Dead')
      : characters
  }, [sort, characters])

  return { characters: sortedCharacters, getCharaters, loading, error }
}
