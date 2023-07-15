import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { fetchFilmDetails } from 'services/fetch';

function MovieDetails() {
  const [filmDetail, setFilmDetail] = useState({});
  const [error, setError] = useState(null);
  const { filmId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!filmId) return;

    const fetchFilmData = async () => {
      try {
        const filmData = await fetchFilmDetails(filmId);
        console.log(filmData);
        setFilmDetail(filmData);
      } catch (error) {
        setError(error);
      } finally {
      }
    };
    fetchFilmData();
  }, [filmId]);
  const { title, overview, genres, release_date, vote_average, poster_path
  } =
    filmDetail;
    const date = new Date(release_date);
    const year = date.getFullYear();
  return (
    <div>
      <Link to={backLinkHref.current}>Go back</Link>
      {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
      {filmDetail !== null && (
        <div>
          <div>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}  width={250}
                    loading="lazy"/>
          </div>
          <div>
            <h1>
            {title} ({year})
            </h1>
            <p>User score: {vote_average * 10}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
              {genres &&
                genres.map(({id,name}) => <li key={id}>{name}</li>)}
            </ul>
          </div>
          </div>
          )}
          <div>
            <h4>Additional information</h4>
            <ul> <li><NavLink to="cast">Cast</NavLink></li>
            <li><NavLink to="reviews">Reviews</NavLink></li>
            </ul>
            
            <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          </Routes>


          </div>
    </div>
  );
}

export default MovieDetails;
