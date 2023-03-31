import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';
import ExpenseForm from '@/components/ExpenseForm';
import Transactions from './Transactions';

const ExpenseList = () => {
	const { 
		displayExpenseForm, 
		setDisplayExpenseForm
	} = useContext(GlobalContext);
	
	// Display Expense Form
	const handleDisplayForm = () => {
		setDisplayExpenseForm(!displayExpenseForm);
	}
	
	const renderListUpper = () => {
		return (
			<div className="c-expense-list__upper">
				<h2 className="c-expense-list__title">Expense List</h2> 
				<button className="button" onClick={handleDisplayForm}>Add Expense</button>						
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