import { useState, useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

const ExpenseForm = () => {
	const { 
		displayExpenseForm, 
		setDisplayExpenseForm,
		transactions,
		setTransactions
	} = useContext(GlobalContext);
	
	const [expenseDescription, setExpenseDescription] = useState('');
	const [expenseAmount, setExpenseAmount] = useState(0);
	
	// Display form logic
	const handleDisplayForm = () => {
		setDisplayExpenseForm(!displayExpenseForm);
	}
	
	// Transactions 
	//------------------------------
	// Add date to expense item
	const currentDate = () => {
		let today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		const yyyy = today.getFullYear();
		
		today = mm + '/' + dd + '/' + yyyy;
		
		return today;
	}
	
	// Generate Unique ID
	const generateID = () => {
		const dateString = Date.now().toString(36); // convert num to base 36 and stringify
		const randomString = Math.random().toString(36).substring(2, 8); // start at index 2 to skip decimal point
		return `${dateString}-${randomString}`;
	}
	
	// Add new transaction
	const handleTransaction = () => {
		const currentTransaction = {
			id: generateID(),
			description: expenseDescription,
			amount: expenseAmount,
			date: currentDate()
		}
		
		const newTransaction = [...transactions, currentTransaction];
		setTransactions(newTransaction);
		
		// TODO: add error handling for form before adding new transaction to transactions array		
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
		
		e.preventDefault();		
		formInput.forEach(input => input.value = ''); // Clear input fields on submit
		handleTransaction();
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
