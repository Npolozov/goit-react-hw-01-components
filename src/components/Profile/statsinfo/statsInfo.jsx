import PropTypes from 'prop-types';
import css from './statsInfo.module.css';
import { changeNumber } from 'utils';

export const StatsInfo = ({ followers, views, likes }) => {
  const numberViews = changeNumber(views);
  const numberFollowers = changeNumber(followers);
  const numberLikes = changeNumber(likes);
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
