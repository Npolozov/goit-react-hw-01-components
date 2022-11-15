import { CardProfile } from 'components/Profile/cardprofile/cardProfile';
import { StatsTitle } from 'components/Statistic/title_two/statsTitle';
import { FriendList } from 'components/Friends/friendList';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';
import users from '../path/user.json';
import data from '../path/data.json';
import friends from '../path/friends.json';
import transactions from '../path/transactions.json';
// import css from './App.module.css';
export const App = () => {
  return (
    <>
      <CardProfile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      />
      <StatsTitle text="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
