import { FriendListItem } from 'components/Friends/FriendListItem/FriendListItem';
import { Item, List } from './friendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <FriendListItem friend={friend} />
        </Item>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
