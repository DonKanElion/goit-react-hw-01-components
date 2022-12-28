// import PropTypes from 'proto-types';


const TransactionHistory = ({ id, type, amount, currency, items }) => {
    return (
        <div className="container">

        <table class="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        
        {items.map(e => (
               <tbody key={id} >
               <tr>
               <td>{e.type}</td>
               <td>{e.amount}</td>
               <td>{e.currency}</td>
               </tr>
           </tbody>
        ))}
     
        </table>

        </div>
    )
}

export default TransactionHistory;
