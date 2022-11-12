import PropTypes from 'prop-types';
import css from './statsInfo.module.css';

export const StatsInfo = ({ followers, views, likes }) => {
  console.log(new Intl.NumberFormat().format(views));
  const numberViews = new Intl.NumberFormat('en-US').format(views);
  const numberFollowers = new Intl.NumberFormat('en-US').format(followers);
  const numberLikes = new Intl.NumberFormat('en-US').format(likes);
  return (
    <ul className={css.stats}>
      <li className={css.item}>
        <span className={css.label}>stats</span>
        <span className={css.quantity}>{numberFollowers}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{numberViews}</span>
      </li>
      <li className={css.item}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{numberLikes}</span>
      </li>
    </ul>
  );
};

StatsInfo.propTypes = {
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
