import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorites(){
const { favorites } = useMovieContext();
console.log(favorites);

  if(favorites.length > 0){ 
  // If there are favorite movies, display them
    return(
      <div>
        <h1 className='favorites'>Your favorites</h1>
      <div className="movies-grid">
        {favorites.map((movie)=> (  // .map is used to iterate over the movies array
          <MovieCard key={movie.id} movie={movie} /> 
          
        ))}
      </div>
      </div>
    )
  }
 if(favorites.length === 0){ 
  return(
    <div className="favorites-empty">
      <h2>No favourite movies yet.</h2>
      <p>Start adding your movies.</p>
    </div>
  )
}
}

export default Favorites;