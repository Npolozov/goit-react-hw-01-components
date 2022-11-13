import { CardProfile } from 'components/Profile/cardprofile/cardProfile';
import { StatsTitle } from 'components/statistic/title_two/statsTitle';
import { StatsInfo } from 'components/statistic/stats/statList';
import users from 'path/user.json';
import data from 'path/data.json';
import css from './App.module.css';

export const App = () => {
  return (
    <>
      <div>
        <CardProfile
          username={users.username}
          tag={users.tag}
          location={users.location}
          avatar={users.avatar}
          stats={users.stats}
        />
      </div>
      <section className={css.statistics}>
        <StatsTitle text="Upload stats" stats={data} />
        <StatsInfo stats={data} />
      </section>
    </>
  );
};
