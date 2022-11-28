import { CardProfile } from 'components/Profile/cardprofile/cardProfile';
import { StatsTitle } from 'components/Statistic/title_two/statsTitle';
import { StatsInfo } from 'components/Statistic/StatsInfo/statsInfo';
import { FriendList } from 'components/Friends/FriendList/friendList';
import { TransactionHistory } from 'components/Transaction/TransactionHistory';
import users from 'path/user.json';
import data from 'path/data.json';
import friends from 'path/friends.json';
import { Section } from './App.styled';
import transactions from '../../path/transactions.json';
import { Box } from './Box';

export const App = () => {
  return (
    <Box
      bg="orange"
      p="50px"
      display="flex"
      flexDirection="column"
      alignContent="center"
      alignItems="center"
    >
      <CardProfile users={users} />
      <Section>
        <StatsTitle text="Upload stats" stats={data} />
        <StatsInfo stats={data} />
      </Section>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  );
};
