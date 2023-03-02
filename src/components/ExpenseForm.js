import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

const ExpenseForm = () => {
	const { displayExpenseForm, setDisplayExpenseForm } = useContext(GlobalContext);
	
	const handleDisplayForm = () => {
		setDisplayExpenseForm(!displayExpenseForm);
	}
	
	const listUpper = () => {
		return (
			<div className="c-expense-list__upper">
				<h2 className="c-expense-list__title">Add Expense</h2> 
				<button className="button" onClick={handleDisplayForm}>View Expenses</button>					
			</div>
		)
	}
	
	return (
		<div className="c-expense-form">
			{
				listUpper()
			}					
		</div>
	)
}

export default ExpenseForm
