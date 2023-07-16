import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { fetchTrendingFilm } from 'services/fetch';
import { StyledSectionHome, StyledSectionHomeTitle, StyledTrendingItem, StyledTrendingLink } from './HomePage.styled';

function HomePage() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTrendingFilm = async () => {
      try {
        setIsLoading(true);
        const response = await fetchTrendingFilm();
        const data = response.results;
       setFilms(data);
      } catch (error) {
        setError(error);
      }
      finally{ setIsLoading(false);}
    };
    getTrendingFilm();
  }, []);
  return (
    <StyledSectionHome>
      <StyledSectionHomeTitle>Trending today</StyledSectionHomeTitle>
      {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
      {isLoading && <Loader />}
      {films.length > 0 && (
        
        <ul>
            {films.map(film => (
            <StyledTrendingItem key={film.id}>
              <StyledTrendingLink to={`/movies/${film.id}`}>{film.title}</StyledTrendingLink>
            </StyledTrendingItem>
          ))}
         
        </ul>
      )}
    </StyledSectionHome>
  );
}

export default HomePage;
