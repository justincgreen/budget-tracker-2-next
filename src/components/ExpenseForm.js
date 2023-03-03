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
	
	const renderForm = () => {
		return (
			<form>
				<label className="form__label">Description</label>
				<input type="text" placeholder="Enter Description" className="form__input form__input--100" />
				<label className="form__label">Amount</label>
				<input type="text" placeholder="Enter Amount" className="form__input form__input--100" />
				<button className="button">Add Expense</button>
			</form>
		)
	}
	
	return (
		<div className="c-expense-form">
			{
				listUpper()				
			}
			{
				renderForm()
			}
		</div>
	)
}

export default ExpenseForm
