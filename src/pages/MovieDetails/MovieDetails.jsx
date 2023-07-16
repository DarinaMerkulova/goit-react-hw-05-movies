import { Loader } from 'components/Loader/Loader';
import { lazy, useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import { fetchFilmDetails } from 'services/fetch';
import {
  StyledAdditionalLink,
  StyledAdditionalList,
  StyledContainerDetail,
  StyledGenresList,
  StyledGoBack,
  StyledSectionDetailes,
  TitleAdditional,
} from './MovieDetails.styled';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
function MovieDetails() {
  const [filmDetail, setFilmDetail] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { filmId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!filmId) return;

    const fetchFilmData = async () => {
      try {
        setIsLoading(true);
        const filmData = await fetchFilmDetails(filmId);
        setFilmDetail(filmData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFilmData();
  }, [filmId]);
  const { title, overview, genres, release_date, vote_average, poster_path } =
    filmDetail;
  const date = new Date(release_date);
  const year = date.getFullYear();
  return (
    <StyledContainerDetail>
      <StyledGoBack to={backLinkHref.current}>Go back</StyledGoBack>
      {error !== null && (
        <p className="c-error">
          Oops, some error occured. Please, try again later. Error: {error}
        </p>
      )}
      {isLoading && <Loader />}
      {filmDetail !== null && (
        <StyledSectionDetailes>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              width={250}
              loading="lazy"
            />
          </div>
          <div>
            <h1>
              {title} ({year})
            </h1>
            <p>User score: {(vote_average * 10).toFixed(1)}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <StyledGenresList>
              {genres &&
                genres.map(({ id, name }) => <li key={id}>{name},</li>)}
            </StyledGenresList>
          </div>
        </StyledSectionDetailes>
      )}
      <div>
        <TitleAdditional>Additional information</TitleAdditional>
        <StyledAdditionalList>
          <StyledAdditionalLink to="cast">Cast</StyledAdditionalLink>
          <StyledAdditionalLink to="reviews">Reviews</StyledAdditionalLink>
        </StyledAdditionalList>

        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </div>
    </StyledContainerDetail>
  );
}

export default MovieDetails;
