import styles from './Profile.module.css';
import PropTypes from 'prop-types';

const Product = props => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={props.avatar}
        alt={props.name + ' avatar'}
        className={styles.avatar}
      />
      <p className={styles.name}>{props.name}</p>
      <p className={styles.tag}>{props.tag}</p>
      <p className={styles.location}>{props.location}</p>
    </div>

    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{props.stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{props.stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{props.stats.likes}</span>
      </li>
    </ul>
  </div>
);
export default Product;

Product.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Product.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};