import PropTypes from 'prop-types'

export function ListOfCharacters ({ characters }) {
  return (
    <ul className='characters'>
      {characters.map((character) => (
        <li key={character.id} className='character'>
          <h3>{character.name}</h3>
          <p>{character.species}</p>
          <p>{ character.origin}</p>
          <img src={character.image} alt={character.name} />
        </li>
      ))}
    </ul>
  )
}

export function NoCharacters () {
  return (
    <div className='not-found'>
      <img src='https://i.pinimg.com/originals/b3/cc/02/b3cc0220fac2894b9e04b6af43acc9e2.gif' alt="rick sanchez" />
      <h3 className='character' > No characters found</h3>
    </div>
  )
}

export function Characters ({ characters }) {
  const hasCharacters = characters?.length
  return (hasCharacters ? <ListOfCharacters characters={characters} /> : <NoCharacters />)
}

ListOfCharacters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object)
}

Characters.propTypes = {
  characters: PropTypes.array
}
