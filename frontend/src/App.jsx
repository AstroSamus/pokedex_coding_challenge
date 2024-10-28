import './App.css'
import { LoginPanel } from './components/LoginPanel/LoginPanel'
import { Pokedex } from './components/Pokedex/Pokedex'

function App() {

  return (
    <>
      <header>
        <LoginPanel />
      </header>
      <Pokedex />
    </>
    
  )
}

export default App
