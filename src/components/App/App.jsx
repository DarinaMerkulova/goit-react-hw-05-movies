
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Container, StyledLink, StyledNav } from 'components/App/App.styled.js';



const HomePage = lazy(()=>import('pages/HomePage/HomePage'));
const MovieDetails = lazy(()=>import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(()=>import('pages/Movies/Movies'));
const NotFound = lazy(()=>import('pages/NotFound/NotFound'));
const App = () => {
  return (
    <Container>
      <StyledNav>
        <StyledLink to="/" end> Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledNav>

      <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:filmId/*" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </Container>
  );
};
export default App;