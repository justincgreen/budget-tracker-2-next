import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';

const Transactions = () => {
  const { 
    displayExpenseForm, 
    setDisplayExpenseForm,		
    transactions,
    setTransactions
  } = useContext(GlobalContext);
  
  // Display Expense Form
  const handleDisplayForm = () => {
    setDisplayExpenseForm(!displayExpenseForm);
  }
  
  // Delete & Edit Expenses
  const deleteExpense = (id) => {
    const filterItems = transactions.filter((element, index) => {
      return element.id !== id;		  
    });
      
    setTransactions(filterItems);
  }
  
  const editExpense = () => {
    console.log('Edit Expense');
  }
  
  return (
    transactions.length < 1 
    ? 
    'There are currently no expenses'
    :
    <ul className="c-expense-list__items">
      {
        transactions.map((item) => {
          return (
            <li className={`c-expense-list__item c-expense-list__item-${item.id}`} key={item.id}>
              <span className="c-expense-list__item-timestamp">{item.timestamp}</span>
              <span className="c-expense-list__item-description">{item.description }</span>
              <span className="c-expense-list__item-amount">${parseFloat(item.amount).toFixed(2)}</span>
              {/* <span className="c-expense-list__item-amount">${convertNumber(item.amount)}</span> */}
              <span className="c-expense-list__delete" onClick={
                () => {
                  deleteExpense(item.id)
                  // need to delete expense from local storage
                }
              }>
                <DeleteForeverIcon sx={{ color: '#ff4e4e' }} />
              </span>
              <span className="c-expense-list__edit" onClick={editExpense}>
                <EditNotificationsIcon sx={{ color: '#55d4da' }} />
              </span>						
            </li>
          )
        })
      }
    </ul>
  )
}

export default Transactions
