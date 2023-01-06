import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <div className="container">

        <table className={classNames(styles.transaction_history)}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        
        {items.map( ({ id, type, amount, currency }) => (
               <tbody key={id} >
               <tr>
               <td>{type}</td>
               <td>{amount}</td>
               <td>{currency}</td>
               </tr>
           </tbody>
        ))}
     
        </table>

        </div>
    )
}

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
}

export default TransactionHistory;
