import PropTypes from 'prop-types';
import css from './renderStatsList.module.css';
import { createColor } from 'utils';

export const RenderList = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{ backgroundColor: createColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
};

RenderList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
