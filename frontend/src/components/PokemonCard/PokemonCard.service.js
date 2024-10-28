import constants from '../../../constants.json'

export const updateFavoritePokemonStatus = async(pokemonId) => {
    try {
        const favPokemonRes = await fetch(`${constants.devServer}/pokedex/favorite/${pokemonId}`, {
            method: 'PATCH',
        })
        if (!favPokemonRes.ok) {
            return { error: favPokemonRes.status}
        }
        return await favPokemonRes.json()
    } catch (error) {
        return { error }
    }
}