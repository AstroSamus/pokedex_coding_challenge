import { StarIcon } from "../icons/StarIcon"

export const PokemonCard = ({ name, image, favorite }) => {
    return (
        <li>
            <img src={image} alt={name} />
            <span>{name}</span>
            <button>
                <StarIcon isActive={favorite} />
            </button>
        </li>
    )
}
