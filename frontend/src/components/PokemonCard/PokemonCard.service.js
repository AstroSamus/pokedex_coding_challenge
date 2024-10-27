import constants from '../../../constants.json'

export const updateFavoritePokemonStatus = async(pokemonId) => {
    try {
        const favPokemonRes = await fetch(`${constants.devServer}/pokedex/favorite/${pokemonId}`, {
            method: 'PATCH',
        })
        if (!favPokemonRes.ok) {
            throw new Error(`Response status: ${favPokemonRes.status}`);
        }
        return await favPokemonRes.json()
    } catch (error) {
        console.log(error)
    }
}