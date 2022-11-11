import { CardProfile } from 'components/cardprofile/cardProfile';
import users from '../user.json';

export const App = () => {
  return (
    <div>
      <CardProfile events={users} />
    </div>
  );
};
