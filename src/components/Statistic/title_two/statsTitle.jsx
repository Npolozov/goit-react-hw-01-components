import PropTypes from 'prop-types';
import { Title } from './statsTitle.styled';

export const StatsTitle = ({ text }) => {
  return text && <Title>{text}</Title>;
};

StatsTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
