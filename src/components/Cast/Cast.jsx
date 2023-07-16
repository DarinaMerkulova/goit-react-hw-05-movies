import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmCast } from 'services/fetch';
import { Loader } from '../Loader/Loader';
import {
  StyledActorName,
  StyledActorPhoto,
  StyledCastItem,
  StyledCastList,
} from './Cast.styled';

const Cast = () => {
  const [filmCast, setFilmCast] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { filmId } = useParams();
  useEffect(() => {
    if (!filmId) return;

    const fetchCastData = async () => {
      try {
        setIsLoading(true);
        const filmCastData = await fetchFilmCast(filmId);
        console.log(filmCastData);
        setFilmCast(filmCastData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCastData();
  }, [filmId]);
  const { cast } = filmCast;
  return (
    <div>
      {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
      {isLoading && <Loader />}
      {filmCast !== null && (
        <StyledCastList>
          {cast &&
            cast.map(({ id, name, character, profile_path }) => (
              <StyledCastItem key={id}>
                <div>
                  <StyledActorPhoto
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                    width="180px"
                  />
                </div>
                <StyledActorName>
                  <h5>{name}</h5>
                  <p>Character: {character}</p>
                </StyledActorName>
              </StyledCastItem>
            ))}
        </StyledCastList>
      )}
    </div>
  );
};

export default Cast;
