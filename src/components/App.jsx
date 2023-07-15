
import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';

const HomePage = lazy(()=>import('pages/HomePage'));
const MovieDetails = lazy(()=>import('pages/MovieDetails'));
const Movies = lazy(()=>import('pages/Movies'));
const NotFound = lazy(()=>import('pages/NotFound'));
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }`


export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:filmId/*" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </div>
  );
};
