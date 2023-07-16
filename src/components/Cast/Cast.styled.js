import { styled } from 'styled-components';

export const StyledCastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;
  list-style: none;
  text-align: center;
  padding: 60px;
  box-shadow: 0 0 10px rgb(14, 82, 91);
  margin: 0;
  background-color: rgb(29, 29, 39);
`;
export const StyledActorName = styled.div`
  display: block;
  background-color: rgba(14, 82, 91, 0.1);
  margin: 0;
  padding: 20px 10px;
`;

export const StyledCastItem = styled.li`
  flex-basis: calc((100% - 24px) / 6);
`;

export const StyledActorPhoto = styled.img`
  width: 100%;
`;
