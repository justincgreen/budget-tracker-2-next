import { useEffect, useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

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
    search,
    setSearch,
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
  const editExpense = (id, description, amount) => {
    setDisplayModal(true);
    setDisplayEditExpenseForm(true);
    setIsolatedExpense({id, description, amount});
  }
  
  //----------------------------------------------------------------------
  
  useEffect(() => {
    // Search Expenses
    let expenseItems = document.querySelectorAll('.c-expense-list__item');
    
    expenseItems.forEach((expense) => {
      expense.querySelector('.c-expense-list__item-description').textContent.toLowerCase().startsWith(search) 
      ? expense.style.display = 'block' 
      : expense.style.display = 'none';
    });
  }, [search]);
  
  //----------------------------------------------------------------------
  
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
                <DeleteForeverIcon sx={{ color: '#ff4e4e', fontSize: '28px' }} />
              </span>
              <span className="c-expense-list__edit" onClick={
                () => {
                  editExpense(item.id, item.description, item.amount)
                }
              }>
                <EditIcon sx={{ color: '#55d4da', fontSize: '28px' }} />
              </span>						
            </li>
          )
        })
      }
    </ul>
  )
}

export default Transactions
