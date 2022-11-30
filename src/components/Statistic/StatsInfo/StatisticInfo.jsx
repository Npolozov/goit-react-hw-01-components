import { List } from 'components/Statistic/renderstatslist/RenderListStatistic';
import PropTypes from 'prop-types';
import { List } from './statsInfo.styled';

export const StatsInfo = ({ stats }) => {
  return (
    <List>
      {stats.map(({ id, label, percentage }) => (
        <RenderList key={id} label={label} percentage={percentage} />
      ))}
    </List>
  );
};

StatsInfo.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
