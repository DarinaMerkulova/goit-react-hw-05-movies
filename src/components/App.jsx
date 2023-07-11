import HomePage from "pages/HomePage";
import Movies from "pages/Movies";
import NotFound from "pages/NotFound";
import { NavLink, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";

const StyledLink = styled(NavLink)`
color: black;

&.active {
  color: orange;
}
`;
export const App = () => {

  

  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>

    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="*" element={<NotFound />} />
    
  </Routes>
    </div>
  );
};
