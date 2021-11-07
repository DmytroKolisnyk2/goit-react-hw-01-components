import styles from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = props => (
  <ul className={styles.friends__list}>
    {
      props.friends.map((item) => <FriendListItem
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
        key={item.id}
      />)}
  </ul>
);
export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
}