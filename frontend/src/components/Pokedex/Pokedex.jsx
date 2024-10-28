import { useState, useEffect } from "react"
import { PokemonCard } from "../PokemonCard/PokemonCard"
import { getPokemonByName, getAllPokedexInfo } from "./Pokedex.service"
import './Pokedex.css'

export const Pokedex = () => {
    const [searchBar, setSearchBar] = useState('')
    const [pokedexData, setPokedexData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getPokemonList()
    }, [])
  
    const getPokemonList = async() => {
        setError(false)
        setLoading(true)
        const getAllPokedexInfoRes = await getAllPokedexInfo()
        setLoading(false)
        if(getAllPokedexInfoRes?.error) return setError(true)
        setPokedexData(getAllPokedexInfoRes)
    }

    const onSearchPokmemon = async(e) => {
        e.preventDefault()
        setError(false)
        setLoading(true)
        //if searchbar is empty lets return the full list of pokemons
        if(!searchBar) {
            getPokemonList()
            return
        }
        const getPokemonByNameResp =  await getPokemonByName(searchBar)
        setLoading(false)
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
            {error ? <h2>Error 404</h2> : 
                loading ? <h2> Loading </h2> :
                <div className="pokedex__pokemonDisplayer">
                { pokedexData && pokedexData.map((pokemon) => (
                    <PokemonCard id={ pokemon._id }
                        key={ pokemon._id }  
                        image = { pokemon.image }
                        name = { pokemon.name }
                        favorite = { pokemon.favorite }/>
                ))}
                </div>}
        </>
    )
}