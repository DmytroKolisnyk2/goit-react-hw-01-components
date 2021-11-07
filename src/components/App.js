import './App.css';
import Profile from "./Profile/Profile";
import user from '../data/user.json';
import 'modern-normalize/modern-normalize.css';
import statisticalData from '../data/statistic.json';
import Statistics from './Statistic/Statistic';
import friends from '../data/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from '../data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

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
