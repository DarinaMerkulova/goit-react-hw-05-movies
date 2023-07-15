import React, { useEffect, useState }  from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchFilms } from 'services/fetch';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('query');
  const location = useLocation();
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null)
  
  useEffect(() => {
    if (!searchTerm) return;

    const fetchPostsData = async () => {
      try {
        const filmData = await fetchSearchFilms(searchTerm);
        console.log(filmData.results)

        setFilms(filmData.results );
             
      } catch (error) {
        setError(error.message);
        
      } finally {
       
      }
    };

    fetchPostsData();
  }, [searchTerm]);

  const handleSumbit = (event)=>{
  event.preventDefault();
  const searchValue = event.target.children.search.value;
  

  setSearchParams({
    query: searchValue,
  });
  event.target.reset();
}


  return (
    <div>
      <form onSubmit={handleSumbit}>
      <input type="text" name="search"
          placeholder="enter the name of the movie"
          required
        />
        <button type="submit">Search</button>
      </form> 
      
      {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
       {films.length > 0 && (
        
        <ul>
            {films.map(film => (
            <li key={film.id}>
              <Link state={{ from: location }} to={`/movies/${film.id}`}>{film.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Movies
