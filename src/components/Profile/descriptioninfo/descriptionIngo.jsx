import PropTypes from 'prop-types';
import {
  Description,
  Avatar,
  Name,
  Tag,
  Location,
} from './descriptionIngo.styled';

export const DescriptionInfo = ({ avatar, username, tag, location }) => {
  return (
    <Description>
      <Avatar src={avatar} alt={username} />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>
  );
};

DescriptionInfo.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
