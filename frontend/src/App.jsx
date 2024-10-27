import { useEffect, useState } from 'react'
import './App.css'
import Pokedex from './components/Pokedex'
import { getAllPokedexInfo } from './services/pokedexService'

function App() {
  const [pokedexData, setPokedexData] = useState([])
  useEffect(() => {
    getPokemonList()
  }, [])

  const getPokemonList = async() => {
    setPokedexData(await getAllPokedexInfo())
  }

  return (
    <>
      <Pokedex pokemonList={ pokedexData }
      />
    </>
    
  )
}

export default App
