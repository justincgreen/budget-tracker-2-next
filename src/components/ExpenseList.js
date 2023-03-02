import { useState, useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';
import ExpenseForm from '@/components/ExpenseForm';

const ExpenseList = () => {
	const { displayExpenseForm, setDisplayExpenseForm } = useContext(GlobalContext);
	
	const handleDisplayForm = () => {
		setDisplayExpenseForm(!displayExpenseForm);
	}
	
	const listUpper = () => {
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
				displayExpenseForm ? <ExpenseForm /> : listUpper()
			}		
		</div>
	)
}

export default ExpenseList