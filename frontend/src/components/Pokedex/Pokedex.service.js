import constants from '../../../constants.json'

export const getPokemonByName = async(name) => {
    try {
        const rawPokemonInfo = await fetch(`${constants.devServer}/pokedex/${name}`)
        if (!rawPokemonInfo.ok) return { error: 'Unknown error' }
        const pokemonInfo = await rawPokemonInfo.json()
        return [pokemonInfo]   
    }
    catch(error) {
        if(error === 'Response status: 404') return { error: 'No pokemons found' }
        return { error: 'Generic error' }
    }
}

export const getAllPokedexInfo = async() => {
    try {
        const rawPokedexInfo = await fetch(`${constants.devServer}/pokedex`, {
            mode: 'cors',
        })
        if (!rawPokedexInfo.ok) {
            throw new Error(`Response status: ${rawPokedexInfo.status}`);
        }
        const pokedexInfo = await rawPokedexInfo.json()
        return pokedexInfo
    } catch (error) {
        return { error }
    }
}