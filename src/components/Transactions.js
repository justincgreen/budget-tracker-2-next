import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';

const Transactions = () => {
  const {
    displayModal,
    setDisplayModal,
    displayExpenseForm, 
    setDisplayExpenseForm,
    displayEditExpenseForm,
    setDisplayEditExpenseForm,
    displayDeleteExpenseForm,
    setDisplayDeleteExpenseForm,
    isolatedExpense,
    setIsolatedExpense,
    globalExpenses,
    setGlobalExpenses,	
    transactions,
    setTransactions
  } = useContext(GlobalContext);
  
  // Display Expense Form
  const handleDisplayForm = () => {
    setDisplayExpenseForm(!displayExpenseForm);
  }
  
  // Delete expense modal
  const deleteExpenseModal = (id, amount) => {
    setDisplayModal(true);
    setDisplayDeleteExpenseForm(true);
    setIsolatedExpense({id, amount});                
  }
  
  // Edit Expenses
  const editExpense = (description, amount) => {
    setDisplayModal(true);
    setDisplayEditExpenseForm(true);
    console.log(description, amount);
    // TODO: The expense description & amount will also need to be updated in local storage
    // Will also need to update the global balance in local storage after amount is modified
    // May need to create state(s) to pass data between expense item and modal
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
                  deleteExpenseModal(item.id, item.amount)
                }
              }>
                <DeleteForeverIcon sx={{ color: '#ff4e4e' }} />
              </span>
              <span className="c-expense-list__edit" onClick={
                () => {
                  editExpense(item.description, item.amount)
                }
              }>
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
