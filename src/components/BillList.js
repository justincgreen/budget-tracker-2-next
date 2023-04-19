import { useContext, useEffect } from 'react';
import GlobalContext from '@/context/GlobalContext';

const BillList = () => {
  const { 
    globalBills,
    setGlobalBills,
    transactions
  } = useContext(GlobalContext);

  useEffect(() => {
    const billsTotalAmount = () => {
      // Filter out transactions where the bill property is true & add those transactions together to get the total amount of bills
      const filteredTransactions = transactions.filter(item => item.bill === true);          
      const billSum = filteredTransactions.reduce((accumulator, objects) => {
       return accumulator + parseFloat(objects.amount);
      }, 0);
      
      if(billSum > 0) {
        setGlobalBills(billSum);
      }
    }
    billsTotalAmount();
  }, [transactions]);  
  
  return (
    <ul className="c-expense-list__items">
      {
        transactions.some(transaction => transaction.bill === true)
        ?        
        transactions.map((item) => {
          if(item.bill === true) {
            return (
              <li className={`c-expense-list__item c-expense-list__item-${item.id}`} key={item.id}>
                <span className="c-expense-list__item-timestamp">{item.timestamp}</span>
                <span className="c-expense-list__item-description">{item.description }</span>
                <span className="c-expense-list__item-amount">${parseFloat(item.amount).toFixed(2)}</span>				
              </li>
            )
          }
        })
        :
        'There are currently no bills listed.'
      }
    </ul>
  )
}

export default BillList
