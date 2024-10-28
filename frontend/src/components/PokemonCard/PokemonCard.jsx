import { useState } from "react"
import { StarIcon } from "../icons/StarIcon"
import { updateFavoritePokemonStatus } from "./PokemonCard.service"
import './PokemonCard.css'

export const PokemonCard = ({ name, image, favorite, id }) => {
    const [isFavorite, setIsFavorite] = useState(favorite)

    const onFavorite = async() => {
        setIsFavorite((prev) => !prev)
        const updateFavoritePokemonRes = await updateFavoritePokemonStatus(id)
        //if there was an error, undo the favorite status to the previous one
        if(updateFavoritePokemonRes?.error) setIsFavorite((prev) => !prev)
    }


    return (
        <div className="pokemonCard__container">
            <img src = {image} alt = {name} />
            <div className="pokemonCard__informationContainer">
                <span>{name}</span>
                <button className="pokemonCard__favoriteButton" onClick = {onFavorite}>
                    <StarIcon isActive = {isFavorite} />
                </button>
            </div>
        </div>
    )
}
