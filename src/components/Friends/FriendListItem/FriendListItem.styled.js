import styled from '@emotion/styled';

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

export const Img = styled.img`
  width: 100px;
`;
export const Online = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;

  background-color: ${props => {
    switch (String(props.isOnline)) {
      case 'true':
        return 'green';
      case 'false':
        return 'red';
      default:
        return 'black';
    }
  }};
`;

export const Name = styled.p`
  margin-left: 20px;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.38;
  letter-spacing: 0.02em;
  color: #303030;
`;
