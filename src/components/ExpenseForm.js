import { useState, useContext } from 'react';
import{ generateID } from '../helpers/generateID';
import{ currentDate } from '../helpers/currentDate';
import GlobalContext from '@/context/GlobalContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ExpenseForm = () => {
	const { 
		displayExpenseForm, 
		setDisplayExpenseForm,
		globalExpenses,
		setGlobalExpenses,
		transactions,
		setTransactions
	} = useContext(GlobalContext);
	
	const [expenseDescription, setExpenseDescription] = useState('');
	const [expenseAmount, setExpenseAmount] = useState(0);
	const [expenseSuccessMsg, setExpenseSuccessMsg] = useState(false);
	const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);
	
	// Display form logic
	const handleDisplayForm = () => {
		setDisplayExpenseForm(!displayExpenseForm);
	}
	
	// Transactions 
	//------------------------------
	// Add new transaction
	const handleTransaction = () => {
		const currentTransaction = {
			id: generateID(),
			description: expenseDescription,
			amount: expenseAmount,
			timestamp: currentDate()
		}
		
		const newTransaction = [...transactions, currentTransaction];
		setTransactions(newTransaction);
		
		setExpenseSuccessMsg(true);
		setDisableSubmitBtn(true);
		//setGlobalExpenses(parseFloat(expenseAmount));
		
		// Remove success message & re-enable the submit button
		setTimeout(() => {
			setExpenseSuccessMsg(false);
			setDisableSubmitBtn(false);
		},1500);
	}
	
	// Capture form data functions
	const captureExpenseDescription = (e) => {
		setExpenseDescription(e.target.value);
	}
	
	const captureExpenseAmount = (e) => {
		setExpenseAmount(e.target.value);
	}
	
	const captureFormData = (e) => {
		const formDescription = document.querySelector('.form__description');
		const formAmount = document.querySelector('.form__amount');
		const formInput = document.querySelectorAll('.form__input');
		
		e.preventDefault();
		
		if(formDescription.value === '' || formAmount.value === '') {
			alert('Enter a expense description and amount');
		} else {
			formInput.forEach(input => input.value = ''); // Clear input fields on submit
			handleTransaction();	
		}		
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
				<input type="text" placeholder="Enter Description" className="form__description form__input form__input--100" onChange={captureExpenseDescription} />
				<label className="form__label">Amount</label>
				<input type="number" min="0" placeholder="Enter Amount" className="form__amount form__input form__input--100" onChange={captureExpenseAmount} />
				{
					disableSubmitBtn 
					?
					<button className="button" disabled>Add Expense</button>
					:
					<button className="button" onClick={captureFormData}>Add Expense</button>
				}
				
				{
					expenseSuccessMsg ? <CheckCircleIcon /> : null
				}				
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
