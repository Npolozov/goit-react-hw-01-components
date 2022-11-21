import PropTypes from 'prop-types';
import { changeNumber } from 'utils';
import { Stats, Item, Label, Quantity } from './statsInfo.styled';

export const StatsInfo = ({ followers, views, likes }) => {
  const numberViews = changeNumber(views);
  const numberFollowers = changeNumber(followers);
  const numberLikes = changeNumber(likes);
  return (
    <Stats>
      <Item>
        <Label>stats</Label>
        <Quantity>{numberFollowers}</Quantity>
      </Item>
      <Item>
        <Label>Views</Label>
        <Quantity>{numberViews}</Quantity>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Quantity>{numberLikes}</Quantity>
      </Item>
    </Stats>
  );
};

StatsInfo.propTypes = {
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
};
