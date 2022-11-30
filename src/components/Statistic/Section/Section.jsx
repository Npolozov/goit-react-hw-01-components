import PropTypes from 'prop-types';
import { Title, TitleSection } from './statsTitle.styled';

export const Section = ({ text, children }) => {
  return (
    <TitleSection>
      {text && <Title>{text}</Title>}
      {children}
    </TitleSection>
  );
};

Section.propTypes = {
  text: PropTypes.string.isRequired,
};
