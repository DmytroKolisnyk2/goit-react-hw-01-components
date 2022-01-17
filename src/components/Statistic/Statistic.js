import styles from './Statistic.module.css';
import PropTypes from 'prop-types';

const Statistic = ({ stats, title }) => (
  <section className={styles.statistics}>
    {
      (title) && (<div className={styles.title__wrapper}><h2 className={styles.title}>{title}</h2></div>)
    }
    <ul className={styles.stat__list}>
      {stats.map((item) => (
        <li style={{
          backgroundColor: getRandomRgb()
        }}
          className={styles.item} key={item.id}>
          <span className={styles.label}>{item.label}</span>
          <span className={styles.percentage}>{item.percentage}</span>
        </li>
      )
      )}
    </ul>
  </section>
);

const getRandomRgb = () => {
  return `rgb(${getRandom(180, 225)},${getRandom(180, 225)},${getRandom(180, 225)})`
};
const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;


export default Statistic;

// Statistic.defaultProps = {
//   title: 'Statistic'
// }

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};