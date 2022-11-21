import PropTypes from 'prop-types';
import { Title } from './statsTitle.styled';

export const StatsTitle = ({ text }) => {
  return <div>{text && <Title>{text}</Title>}</div>;
};

StatsTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
