import constants from '../../constants.json'

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