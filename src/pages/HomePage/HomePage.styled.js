import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledSectionHomeTitle = styled.h1`
margin-bottom: 40px;`
export const StyledSectionHome = styled.div`
  width: 1120px;
  box-shadow: 0 20px 20px rgb(14, 82, 91);
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const StyledTrendingItem = styled.li`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 15px;
`;

export const StyledTrendingLink = styled(NavLink)`
  color: rgb(238, 234, 234);
  transition: color 0.2s ease;
  &:hover {
    color: rgb(26, 127, 141);
  }
`;
