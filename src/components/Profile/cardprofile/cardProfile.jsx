import PropTypes from 'prop-types';
import { DescriptionInfo } from 'components/Profile/descriptioninfo/descriptionIngo';
import { StatsInfo } from 'components/Profile/statsinfo/statsInfo';
import css from './cardProfile.module.css';

export const CardProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <DescriptionInfo
        key={username}
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <StatsInfo
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
};

CardProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
