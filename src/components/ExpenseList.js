import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';
import ExpenseForm from '@/components/ExpenseForm';
import Transactions from './Transactions';

const ExpenseList = () => {
	const { 
    displayModal,
    setDisplayModal,
		displayExpenseForm, 
		setDisplayExpenseForm,
    displayDeleteAllExpensesForm,
    setDisplayDeleteAllExpensesForm,
    transactions,
    setTransactions,
    setGlobalExpenses
	} = useContext(GlobalContext);
	
	// Display Expense Form
	const handleDisplayForm = () => {
		setDisplayExpenseForm(!displayExpenseForm);
	}
  
  // Delete All Expenses Modal
  const deleteAllExpensesModal = () => {
    setDisplayModal(true);
    setDisplayDeleteAllExpensesForm(true);
  }
	
	const renderListUpper = () => {
		return (
			<div className="c-expense-list__upper">
				<h2 className="c-expense-list__title">Transactions</h2> 
        <div className="button-group">
				  <button className="button" onClick={handleDisplayForm}>Add Expense</button>
          {
            transactions.length < 1
            ?
            <button className="button" disabled>Delete All Expenses</button>
            :
            <button className="button" onClick={deleteAllExpensesModal}>Delete All Expenses</button>
          }		
				  
        </div>
			</div>
		)
	}
		
	return (
		<div className="c-expense-list">			
			{
				displayExpenseForm ? <ExpenseForm /> : renderListUpper()
			}
			{
				!displayExpenseForm && <Transactions />
			}
		</div>
	)
}

export default ExpenseList