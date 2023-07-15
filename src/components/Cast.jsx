import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchFilmCast } from 'services/fetch';

const Cast = () => {
    const [filmCast, setFilmCast] = useState({});
    const [error, setError] = useState(null);
    const { filmId } = useParams();
;

  useEffect(() => {
    if (!filmId) return;

    const fetchCastData = async () => {
      try {
        const filmCastData = await fetchFilmCast(filmId);
        console.log(filmCastData);
        setFilmCast(filmCastData);
      } catch (error) {
        setError(error);
      } finally {
      }
    };
    fetchCastData();
  }, [filmId]);
const {cast} = filmCast
  return (
    <div>
      {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>)}
        {filmCast !== null &&
        <ul>
              {cast &&
                cast.map(({id, name, character, profile_path}) => <li key={id}><img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} width ="150px"/><h5>{name}</h5> <p>Character: {character}</p></li>)}
            </ul>}
    
    </div>
  )
}

export default Cast
