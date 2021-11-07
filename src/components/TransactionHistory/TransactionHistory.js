import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = (props) => <table className={styles.transactions__history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {props.items.map((item) =>
      <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>)}
  </tbody>
</table>;

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired
}