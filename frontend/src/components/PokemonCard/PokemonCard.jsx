import { useState } from "react"
import { StarIcon } from "../icons/StarIcon"
import { updateFavoritePokemonStatus } from "./PokemonCard.service"

export const PokemonCard = ({ name, image, favorite, id }) => {
    const [isFavorite, setIsFavorite] = useState(favorite)

    const onFavorite = () => {
        setIsFavorite((prev) => !prev)
        updateFavoritePokemonStatus(id)
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
