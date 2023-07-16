import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchFilms } from 'services/fetch';
import {
  ContainerMovie,
  StyledFilmList,
  StyledForm,
  StyledInput,
  StyledMovieButton,
} from './Movies.styled';
import {
  StyledTrendingItem,
  StyledTrendingLink,
} from 'pages/HomePage/HomePage.styled';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!searchTerm) return;

    const fetchPostsData = async () => {
      try {
        setIsLoading(true);
        const filmData = await fetchSearchFilms(searchTerm);
        setFilms(filmData.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPostsData();
  }, [searchTerm]);

  const handleSumbit = event => {
    event.preventDefault();
    const searchValue = event.target.children.search.value;

    setSearchParams({
      query: searchValue,
    });
    event.target.reset();
  };

  return (
    <ContainerMovie>
      <StyledForm onSubmit={handleSumbit}>
        <StyledInput
          type="text"
          name="search"
          placeholder="enter the name of the movie"
          required
        />
        <StyledMovieButton type="submit">Search</StyledMovieButton>
      </StyledForm>

      {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
      {isLoading && <Loader />}
      {films.length > 0 && (
        <StyledFilmList>
          {films.map(film => (
            <StyledTrendingItem key={film.id}>
              <StyledTrendingLink
                state={{ from: location }}
                to={`/movies/${film.id}`}
              >
                {film.title}
              </StyledTrendingLink>
            </StyledTrendingItem>
          ))}
        </StyledFilmList>
      )}
    </ContainerMovie>
  );
};

export default Movies;
