import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
