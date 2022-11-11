import PropTypes from 'prop-types';

export const StatsInfo = ({ followers, views, likes }) => {
  return (
    <ul className="stats">
      <li>
        <span className="label">stats</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  );
};

StatsInfo.propTypes = {
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
