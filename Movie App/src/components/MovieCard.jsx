import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({movie}){
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite=isFavorite(movie.id);

  function onFavouriteClick(e){
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }

    
  }
  


  return(
    <div className="movie-card">
      <a href={`https://www.google.com/search?q=${movie.title} movie`} target="_blank" rel="noopener noreferrer" className="movie-link">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active" : "" }`} onClick={onFavouriteClick}>♥</button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
      </a>
    </div>
  )
}

export default MovieCard;