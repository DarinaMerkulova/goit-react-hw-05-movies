import { styled } from 'styled-components';

export const ContainerMovie = styled.div`
  width: 1120px;
  box-shadow: 0 10px 20px rgb(14, 82, 91);
  margin: 0 auto;
  padding: 40px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;
export const StyledInput = styled.input`
  width: 1000px;
  background-color: transparent;
  padding: 10px 40px;
  border: 1px solid rgb(14, 82, 91);
  font-size: 18px;
  color: rgb(238, 234, 234);
  &::placeholder {
    color: rgba(238, 234, 234, 0.5);
  }
`;

export const StyledMovieButton = styled.button`
  background-color: rgb(26, 127, 141);
  color: rgb(238, 234, 234);
  padding: 5px 10px;
  border: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgb(14, 82, 91);
  }
`;

export const StyledFilmList = styled.div`
  margin-left: 40px;
`;
