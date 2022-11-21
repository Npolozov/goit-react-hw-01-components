import PropTypes from 'prop-types';
import { createColor } from 'utils';
import { Item, Label, Percentage } from './renderList.styled';

export const RenderList = ({ label, percentage }) => {
  console.log(label);
  return (
    <Item style={{ backgroundColor: createColor() }}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

RenderList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
