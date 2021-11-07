import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = props => {
  const statusClasses = [props.isOnline ? styles.online : styles.notOnline,  styles.status]
  return (<li className={styles.item}>
    <span className={statusClasses.join(' ')}></span>
    <img className={styles.avatar} src={props.avatar} alt={props.name + ' avatar'} width="100" />
    <p className={styles.name}>{props.name}</p>
  </li>)
};
export default FriendListItem;

FriendListItem.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder'
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}