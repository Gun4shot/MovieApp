import MovieCard from '../components/MovieCard'
import {useState, useEffect, use} from 'react';
import { useLocation } from 'react-router-dom'; 
import { searchMovies, getPopularMovies } from '../services/api';
import '../css/Home.css'; 


function Home(){
  // This is a State to hold the search query
  // const [searchQuery, setSearchQuery] = useState('');
  //This will be used when calling apis.
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error,setError]=useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation(); // Get current location

  useEffect(() =>{
    const loadPopularMovies = async () => {
      try{
        const popularMovies= await getPopularMovies();
        setMovies(popularMovies);
      }catch(err){
        console.log(err);
        setError('Failed to fetch popular movies');
      }
      finally{
        setLoading(false);
      }
    }

    loadPopularMovies();
    setSearchQuery('')
  }, [location.key]);  // Re-run when location changes
   // the function is called first time, the next time it is called is when the array is updated.

  const handleSearch= async (e)=>{
    e.preventDefault(); // Prevents the default form submission behavior and doenst refresh the page.
    if(!searchQuery.trim()) {
       setLoading(true);
       setError(null);
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch (err) {
      setError('Failed to fetch popular movies');
      console.error(err);
    } finally {
      setLoading(false);
    }
    return;
  } 
  
    if (loading) return; // Prevents multiple submissions while loading
    try{
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null); // Clear any previous errors
    }catch(err){
      setError('Failed to search movies');
      console.error(err);
    } finally{
      setLoading(false); // Ensure loading is set to false after the operation completes
    }

  }

  return(
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input 
        type="text" 
        placeholder="Search for a movie..." 
        className='search-input'
        value={searchQuery} //connecting the input value to the state
        onChange={(e)=>setSearchQuery(e.target.value)} //updating the state when input changes otherwise it doesnot let you type. It refreshes the page.
        />
        
        <button type="submit" className='search-button'>Search</button>
      </form>

      {error && <div className="error">{error}</div>}

      <h1 className='Header'>Trending movies today</h1>
      <br></br>

    {loading ? (<div className="loading">Loading...</div>) : (
      <div className="movies-grid">
        {movies.map((movie)=> (  // .map is used to iterate over the movies array
          <MovieCard key={movie.id} movie={movie} /> 
        ))}
      </div>
    )};
    </div>
  )
}

export default Home;