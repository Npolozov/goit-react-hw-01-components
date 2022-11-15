import { StatsInfo } from 'components/Statistic/stats/statList';
import PropTypes from 'prop-types';
import data from 'components/path/data.json';

import css from './statsTitle.module.css';

export const StatsTitle = ({ text }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{text}</h2>
      <StatsInfo stats={data} />
    </section>
  );
};

StatsTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
