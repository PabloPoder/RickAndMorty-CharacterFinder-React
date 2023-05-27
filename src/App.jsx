
import './App.css'
import { Characters } from './components/Characters'
import { useSearch } from './hooks/useSearch.js'
import { useCharacters } from './hooks/useChatacters'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateQuery, inputError } = useSearch()
  const { characters, getCharaters, loading, error: charactersError } = useCharacters({ search, sort })

  const debouncedGetCharacters = useCallback(
    debounce(search => {
      getCharaters({ search })
    }, 500), [])

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    updateQuery(newQuery)

    debouncedGetCharacters(newQuery);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (inputError || !search) return

    getCharaters({ search })
  }

  const sortDiponibility = loading || !characters.length > 0

  return (
    <>
      <main className="main">
        <h1>Rick & Morty: Character finder</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            onChange={handleChange}
            value={search}
            type="text"
            placeholder="Rick Sanches, Summer Smith, Morty Smith"
            style={{ border: inputError ? "1px solid red" : undefined }}
          />
          <label htmlFor="">Only Dead</label>
          <input
            type="checkbox"
            onChange={handleSort}
            value={sort}
            disabled={sortDiponibility}
          />
          {/* <button type='submit'>Search</button> */}
        </form>
      </main>

      <main className="form">
        {loading && <p>Loading...</p>}
        {charactersError && <p>{charactersError}</p>}
        {!loading && <Characters characters={characters} />}
      </main>
    </>
  );
}

export default App
