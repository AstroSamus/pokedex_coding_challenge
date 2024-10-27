import constants from '../../../constants.json'

export const getPokemonByName = async(name) => {
    try {
        const rawPokemonInfo = await fetch(`${constants.devServer}/pokedex/${name}`)
        if (!rawPokemonInfo.ok) {
            throw new Error(`Response status: ${rawPokemonInfo.status}`);
        }
        const pokemonInfo = await rawPokemonInfo.json()
        return [pokemonInfo]
    } catch (error) {
        console.log(error)
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
        console.log(error)
    }
}