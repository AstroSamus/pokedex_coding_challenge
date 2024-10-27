import './App.css'
import Pokedex from './components/Pokedex'

function App() {
  return (
    <Pokedex pokemonList = {
      [
        {
            "name": "charmeleon",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            "_id": "Olk4qIEPOlhraCX4",
            "isFavorite": true,
            "favorite": true
        },
        {
            "name": "squirtle",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            "_id": "U6nXRE9GkUlk1WdX"
        },
        {
            "name": "caterpie",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
            "_id": "ZfxjdXjlHOztdnGk"
        },
        {
            "name": "wartortle",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
            "_id": "aSFjkOEWDadlc9yX"
        },
      ]
    }
    
    />
  )
}

export default App
