import { useState } from "react"
import { StarIcon } from "../icons/StarIcon"
import { updateFavoritePokemonStatus } from "./PokemonCard.service"

export const PokemonCard = ({ name, image, favorite, id }) => {
    const [isFavorite, setIsFavorite] = useState(favorite)

    const onFavorite = async() => {
        setIsFavorite((prev) => !prev)
        const updateFavoritePokemonRes = await updateFavoritePokemonStatus(id)
        //if there was an error, undo the favorite status to the previous one
        if(updateFavoritePokemonRes?.error) setIsFavorite((prev) => !prev)
    }


    return (
        <li>
            <img src = {image} alt = {name} />
            <span>{name}</span>
            <button onClick = {onFavorite}>
                <StarIcon isActive = {isFavorite} />
            </button>
        </li>
    )
}
