import PropTypes from 'prop-types';
import css from './statsTitle.module.css';

export const StatsTitle = ({ text }) => {
  return <h2 className={css.title}>{text}</h2>;
};

StatsTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
