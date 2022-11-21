import styled from '@emotion/styled';

export const Stats = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(187, 176, 176);
  flex-basis: calc((100% - 6 * 1px) / 3);
  align-items: center;
  padding: 20px 0;
`;

export const Label = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.38;
  letter-spacing: 0.02em;
  color: #303030;
`;
export const Quantity = styled.span`
  padding-bottom: 10px;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.38;
  letter-spacing: 0.02em;
  color: #303030;
`;
