import { useState, useEffect } from "react"
import { PokemonCard } from "../PokemonCard/PokemonCard"
import { getPokemonByName, getAllPokedexInfo } from "./Pokedex.service"

export const Pokedex = () => {
    const [searchBar, setSearchBar] = useState('')
    const [pokedexData, setPokedexData] = useState([])
    const [error, setError] = useState(false)
    useEffect(() => {
      getPokemonList()
    }, [])
  
    const getPokemonList = async() => {
      setPokedexData(await getAllPokedexInfo())
    }

    const onSearchPokmemon = async(e) => {
        e.preventDefault()
        setError(false)
        //if searchbar is empty lets return the full list of pokemons
        if(!searchBar) {
            getPokemonList()
            return
        }
        const getPokemonByNameResp =  await getPokemonByName(searchBar)
        if(getPokemonByNameResp?.error) setError(true)
        else setPokedexData(getPokemonByNameResp)
    }

    return (
        <>
            <h1>My Pokedex</h1>
            <form onSubmit={onSearchPokmemon}>
                Search a pokemon by name:<input 
                    type="text" 
                    value={searchBar}
                    onChange={(e) => setSearchBar(e.target.value)}/>
            </form>
            {error ? <h2>Error 404</h2> : <ul>
                { pokedexData && pokedexData.map((pokemon) => (
                    <PokemonCard id={ pokemon._id }
                        key={ pokemon._id }  
                        image = { pokemon.image }
                        name = { pokemon.name }
                        favorite = { pokemon.favorite }/>
                ))}
            </ul>}
        </>
    )
}