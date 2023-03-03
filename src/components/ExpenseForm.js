import { useState, useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

const ExpenseForm = () => {
	const { displayExpenseForm, setDisplayExpenseForm } = useContext(GlobalContext);
	
	const [expenseDescription, setExpenseDescription] = useState('');
	const [expenseAmount, setExpenseAmount] = useState(0);
	
	// Display form logic
	const handleDisplayForm = () => {
		setDisplayExpenseForm(!displayExpenseForm);
	}
	
	// Capture form data functions
	const captureExpenseDescription = (e) => {
		setExpenseDescription(e.target.value);
	}
	
	const captureExpenseAmount = (e) => {
		setExpenseAmount(e.target.value);
	}
	
	const captureFormData = (e) => {
		const formInput = document.querySelectorAll('.form__input');
		
		// TODO: Create object to store data and push it into another piece of state that manages all transactions
		e.preventDefault();		
		formInput.forEach(input => input.value = ''); // Clear input fields on submit
		//console.log(expenseDescription, expenseAmount);				
	}
	
	// Render functions - local components
	const renderListUpper = () => {
		return (
			<div className="c-expense-list__upper">
				<h2 className="c-expense-list__title">Add Expense</h2> 
				<button className="button" onClick={handleDisplayForm}>View Expenses</button>					
			</div>
		)
	}
	
	const renderForm = () => {
		return (
			<form className="form__add-expense">
				<label className="form__label">Description</label>
				<input type="text" placeholder="Enter Description" className="form__input form__input--100" onChange={captureExpenseDescription} />
				<label className="form__label">Amount</label>
				<input type="number" min="0" placeholder="Enter Amount" className="form__input form__input--100" onChange={captureExpenseAmount} />
				<button className="button" onClick={captureFormData}>Add Expense</button>
			</form>
		)
	}
	
	// Main component
	return (
		<div className="c-expense-form">
			{
				renderListUpper()				
			}
			{
				renderForm()
			}
		</div>
	)
}

export default ExpenseForm
