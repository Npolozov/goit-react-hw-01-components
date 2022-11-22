import PropTypes from 'prop-types';
import { Name, Online, Img } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { isOnline, name, avatar } }) => {
  return (
    <>
      <Online isOnline={isOnline}>{isOnline}</Online>
      <Img src={avatar} alt={name} />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
