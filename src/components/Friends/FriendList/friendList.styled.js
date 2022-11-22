import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 50px 0px;
  width: 500px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid rgb(194, 186, 186);
  box-shadow: inset;
  padding: 10px;
  background-color: rgb(236, 225, 225);
  box-shadow: 0 0 10px #c6cccced;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
