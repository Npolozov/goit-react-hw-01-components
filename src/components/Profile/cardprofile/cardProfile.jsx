import PropTypes from 'prop-types';
import { DescriptionInfo } from 'components/Profile/descriptioninfo/descriptionIngo';
import { StatsInfo } from 'components/Profile/statsinfo/statsInfo';
import { Conteiner } from './cardProfile.styled';

export const CardProfile = ({
  users: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Conteiner>
      <DescriptionInfo
        key={username}
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <StatsInfo followers={followers} views={views} likes={likes} />
    </Conteiner>
  );
};

CardProfile.propTypes = {
  users: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
