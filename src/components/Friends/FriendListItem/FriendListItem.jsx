import PropTypes from 'prop-types';
import { Name, Online, Img, Item } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, name, avatar }) => {
  return (
    <Item>
      <Online isOnline={isOnline}>{isOnline}</Online>
      <Img src={avatar} alt={name} />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
