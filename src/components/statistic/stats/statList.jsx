import { RenderList } from 'components/statistic/renderstatslist/renderStatsLista';
import PropTypes from 'prop-types';
import css from './statList.module.css';

export const StatsInfo = ({ stats }) => {
  console.log(stats);
  return (
    <ul className={css.stat_list}>
      {stats.map(({ id, label, percentage }) => (
        <RenderList key={id} label={label} percentage={percentage} />
      ))}
    </ul>
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
