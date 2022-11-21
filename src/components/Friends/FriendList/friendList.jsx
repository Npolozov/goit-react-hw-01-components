import { FriendListItem } from 'components/Friends/FriendListItem/FriendListItem';
import { List } from './friendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
