import { useState } from 'react';

const ExpenseList = () => {
	const [displayExpenseForm, setDisplayExpenseForm] = useState(false);
	
	const handleDisplayForm = () => {
		setDisplayExpenseForm(!displayExpenseForm);
	}
	
	return (
		<div className="c-expense-list">
			<div className="c-expense-list__upper">
				<h2 className="c-expense-list__title">Expense List</h2>
				<button className="button" onClick={handleDisplayForm}>Add Expense</button>
			</div>
			
			{
				displayExpenseForm ? 'Form displayed' : null
			}		
		</div>
	)
}

export default ExpenseList