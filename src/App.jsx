import { Link } from 'react-router-dom'
import './App.css'
import CustomRoutes from './routes/CustomRoutes'

function App() {
  
  return (
    <>
    <div className='pokidex-heading'>
      <Link to="/">
      <h1 id="pokedex">Pokedex</h1>
      </Link>
      </div>
    <CustomRoutes/>
    </>
  )
}

export default App
