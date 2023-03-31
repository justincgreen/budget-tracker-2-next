import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';
import ExpenseForm from '@/components/ExpenseForm';
import Transactions from './Transactions';

const ExpenseList = () => {
	const { 
		displayExpenseForm, 
		setDisplayExpenseForm,
    setTransactions,
    setGlobalExpenses
	} = useContext(GlobalContext);
	
	// Display Expense Form
	const handleDisplayForm = () => {
		setDisplayExpenseForm(!displayExpenseForm);
	}
  
  // Delete All Expenses
  const deleteAllExpenses = () => {
    const resetExpenses = 0;
    
    setTransactions([]);
    setGlobalExpenses(resetExpenses);
    localStorage.setItem('local-transactions', '[]');
    localStorage.setItem('local-expenses-amount', JSON.stringify(resetExpenses.toFixed(2)));
  }
	
	const renderListUpper = () => {
		return (
			<div className="c-expense-list__upper">
				<h2 className="c-expense-list__title">Expense List</h2> 
        <div className="button-group">
				  <button className="button" onClick={handleDisplayForm}>Add Expense</button>			
				  <button className="button" onClick={deleteAllExpenses}>Delete All Expenses</button>
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