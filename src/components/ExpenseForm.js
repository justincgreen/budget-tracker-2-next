import { useState, useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

const ExpenseForm = () => {
	const { displayExpenseForm, setDisplayExpenseForm } = useContext(GlobalContext);
	
	const [expenseDescription, setExpenseDescription] = useState('');
	const [expenseAmount, setExpenseAmount] = useState(0);
	
	const handleDisplayForm = () => {
		setDisplayExpenseForm(!displayExpenseForm);
	}
	
	const captureExpenseDescription = (e) => {
		setExpenseDescription(e.target.value);
	}
	
	const captureExpenseAmount = (e) => {
		setExpenseAmount(e.target.value);
	}
	
	const submitForm = (e) => {
		const formInput = document.querySelectorAll('.form__input');
		
		e.preventDefault();		
		formInput.forEach(input => input.value = ''); // Clear input fields on submit
		//console.log(expenseDescription, expenseAmount);
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
			<form className="form__add-expense">
				<label className="form__label">Description</label>
				<input type="text" placeholder="Enter Description" className="form__input form__input--100" onChange={captureExpenseDescription} />
				<label className="form__label">Amount</label>
				<input type="number" min="0" placeholder="Enter Amount" className="form__input form__input--100" onChange={captureExpenseAmount} />
				<button className="button" onClick={submitForm}>Add Expense</button>
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
