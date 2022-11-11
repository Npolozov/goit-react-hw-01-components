import PropTypes from 'prop-types';

export const DescriptionInfo = ({ avatar, username, tag, location }) => {
  return (
    <div className="description">
      <img src={avatar} alt={username} className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};

DescriptionInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
