import PropTypes from 'prop-types';
import { DescriptionInfo } from 'components/descriptioninfo/descriptionIngo';
import { StatsInfo } from 'components/statsinfo/statsInfo';

export const CardProfile = ({ events }) => {
  return (
    <div className="profile">
      <DescriptionInfo
        key={events.username}
        username={events.username}
        tag={events.tag}
        location={events.location}
        avatar={events.avatar}
      />
      <StatsInfo
        followers={events.stats.followers}
        views={events.stats.views}
        likes={events.stats.likes}
      />
    </div>
  );
};

CardProfile.propTypes = {
  events: PropTypes.objectOf(
    PropTypes.exact({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    })
  ),
};
