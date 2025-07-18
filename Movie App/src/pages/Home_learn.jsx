import MovieCard from '../components/MovieCard'
import {useState} from 'react';


function Home(){
  // This is a State to hold the search query
  // const [searchQuery, setSearchQuery] = useState('');
  //This will be used when calling apis.
  const [searchQuery, setSearchQuery] = useState('');

  const movies=[
    {id:1, title:"MOVIE", release_date:"2026", url:"https://via.placeholder.com/150"},
    {id:2, title:"Film2", release_date:"2020", url:"https://via.placeholder.com/150"},
    {id:3, title:"Film3", release_date:"2025", url:"https://via.placeholder.com/150"},
  ]

  const handleSearch=(e)=>{
    e.preventDefault(); // Prevents the default form submission behavior and doenst refresh the page.
    alert(`Searching for: ${searchQuery}`);
    setSearchQuery(''); // Resets the search query after submission
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


      <div className="movie-grid">
        {movies.map((movie)=> (  // .map is used to iterate over the movies array
           movie.title.toLowerCase().startsWith(searchQuery)&&( // This checks if the movie title starts with the search query
          <MovieCard key={movie.id} movie={movie} /> )
        ))}
      </div>
    </div>
  )
}

export default Home;