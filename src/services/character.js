
const END_POINT = 'https://rickandmortyapi.com/api/character/?name='

export const getCharactersService = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`${END_POINT}${search}`)

    if (response.status !== 200) { 
      return []
    }

    const json = await response.json()

    const characters = json.results

    return characters?.map((character) => ({
      id: character.id,
      name: character.name,
      species: character.species,
      origin: character.origin.name,
      image: character.image,
      status: character.status
    }))
  } catch (e) {
    throw new Error('Error while fetching characters')
  }
}
