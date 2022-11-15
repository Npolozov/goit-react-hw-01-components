import css from './friendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <ul className={css.friend_list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
          <span className={`${css.online} ${css[isOnline]}`}>{isOnline}</span>
          <img src={avatar} alt={name} className={css.img} />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
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
