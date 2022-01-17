import Profile from "./Profile/Profile";
import Statistics from './Statistic/Statistic';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import './App.css';
import 'modern-normalize/modern-normalize.css';

import user from '../data/user.json';
import statisticalData from '../data/statistic.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';


function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
