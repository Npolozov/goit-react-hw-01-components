import { CardProfile } from 'components/cardprofile/cardProfile';
import users from '../user.json';

export const App = () => {
  return (
    <div>
      <CardProfile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      />
    </div>
  );
};
