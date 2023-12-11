import { useContext, useEffect } from 'react';
import GlobalContext from '@/context/GlobalContext';

const GroceriesList = () => {
  const { 
    globalGroceries, 
    setGlobalGroceries,
    transactions
  } = useContext(GlobalContext);

  useEffect(() => {
    const groceriesTotalAmount = () => {
      // Filter out transactions where the groceries property is true & add those transactions together to get the total amount of groceries
      const filteredTransactions = transactions.filter(item => item.grocery === true);
      const groceriesSum = filteredTransactions.reduce((accumulator, objects) => {
       return accumulator + parseFloat(objects.amount);
      }, 0);
      
      if(groceriesSum > 0) {
        setGlobalGroceries(groceriesSum);
      }
    }
    groceriesTotalAmount();
  }, [transactions]);  
  
  return (
    <ul className="c-expense-list__items">
      {
        transactions.some(transaction => transaction.grocery === true)
        ?        
        transactions.map((item) => {
          if(item.grocery === true) {
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
        'There are currently no groceries listed.'
      }
    </ul>
  )
}

export default GroceriesList
