import PropTypes from 'prop-types';
import { createColor } from 'utils';
import css from './renderList.module.css';

export const RenderList = ({ label, percentage }) => {
  console.log(label);
  return (
    <li className={css.item} style={{ backgroundColor: createColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

RenderList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
