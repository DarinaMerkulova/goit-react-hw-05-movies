import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingFilm } from 'services/fetch';

function HomePage() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingFilm = async () => {
      try {
        const response = await fetchTrendingFilm();
        const data = response.results;
       setFilms(data);
      } catch (error) {
        setError(error);
      }
    };
    getTrendingFilm();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
      {films.length > 0 && (
        
        <ul>
            {films.map(film => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
