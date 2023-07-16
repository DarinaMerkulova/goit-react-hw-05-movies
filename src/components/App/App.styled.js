import { styled } from 'styled-components';
import { NavLink} from 'react-router-dom';


export const Container = styled.div`
` 

export const StyledNav = styled.nav`
color: rgba(14, 82, 91, 0.04);
box-shadow: 0 0 20px rgb(14, 82, 91);
font-size: 24px;
justify-content:center;
display: flex;
gap:20px;
`

export const StyledLink = styled(NavLink)`
display: block;
  color: white;
  padding: 20px 10px;
  transition:color 0.2s ease;
&:hover {
  color: rgb(26, 127, 141);
}
  &.active {
    color: rgb(26, 127, 141);
  }`
