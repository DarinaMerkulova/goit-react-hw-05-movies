import { NavLink } from 'react-router-dom';

const { styled } = require('styled-components');

export const StyledGoBack = styled(NavLink)`
  display: block;

  font-size: 18px;
  color: inherit;
  margin-bottom: 20px;
  transition: color 0.2s ease;
  &:hover {
    color: rgb(26, 127, 141);
  }
`;

export const StyledContainerDetail = styled.div`
  background-color: rgba(14, 82, 91, 0.1);
  width: 1120px;
  margin: 0 auto;
  padding: 20px 40px;
`;

export const StyledSectionDetailes = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  border-bottom: 2px solid rgb(14, 82, 91);
`;

export const StyledGenresList = styled.ul`
  display: flex;
  gap: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const TitleAdditional = styled.h4`
  display: block;

  padding: 20px;
  text-align: center;
  margin: 0;
  box-shadow: 0 0 10px rgb(14, 82, 91);
`;
export const StyledAdditionalList = styled.ul`
  display: flex;
  list-style: none;
  background-color: rgb(29, 29, 39);
  margin: 0;
  padding: 0;
  box-shadow: 0 0 10px rgb(14, 82, 91);
`;

export const StyledAdditionalLink = styled(NavLink)`
  display: block;
  padding: 10px 20px;
  font-size: 18px;
  color: inherit;

  border-right: 1px solid rgb(14, 82, 91);
  transition: color 0.2s ease;
  &.active {
    background-color: rgb(14, 82, 91);
  }
  &:hover {
    color: rgb(26, 127, 141);
  }
`;
