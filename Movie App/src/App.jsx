
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/home'
import {Routes,Route} from 'react-router-dom'
import Favorite from './pages/Favourite.jsx'
import NavBar from './components/NavBar.jsx'
import { MovieProvider } from './contexts/MovieContext';

function App() {



  return (
    <div>
      <MovieProvider>
      <NavBar />
    <main className="main-content">  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MovieApp" element={<Home />} />
      <Route path="/Favourite" element={<Favorite/>}/>
    </Routes>
    </main>
    </MovieProvider>
    </div>
  )
}

export default App
