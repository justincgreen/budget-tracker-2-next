import { useState, useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';
import ExpenseForm from '@/components/ExpenseForm';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';

const ExpenseList = () => {
	const { 
		displayExpenseForm, 
		setDisplayExpenseForm,
		transactions,
		setTransactions
	} = useContext(GlobalContext);
	
	// Display Expense Form
	const handleDisplayForm = () => {
		setDisplayExpenseForm(!displayExpenseForm);
	}				
	
	// Delete & Edit Expenses
	const deleteExpense = () => {
		console.log('Deleted');
	}
	
	const editExpense = () => {
		console.log('Edit Expense');
	}
	
	const renderListUpper = () => {
		return (
			<div className="c-expense-list__upper">
				<h2 className="c-expense-list__title">Expense List</h2> 
				<button className="button" onClick={handleDisplayForm}>Add Expense</button>				
			</div>
		)
	}
	
	const renderList = () => {
		return (
			<ul className="c-expense-list__items">
				<li className="c-expense-list__item">
					<span className="c-expense-list__item-timestamp">3/4/23</span>
					<span className="c-expense-list__item-description">Food</span>
					<span className="c-expense-list__item-amount">$100</span>
					<span className="c-expense-list__delete" onClick={deleteExpense}>
						<DeleteForeverIcon sx={{ color: '#ff4e4e' }} />
					</span>
					<span className="c-expense-list__edit" onClick={editExpense}>
						<EditNotificationsIcon sx={{ color: '#55d4da' }} />
					</span>					
				</li>
			</ul>
		)
	}
		
	return (
		<div className="c-expense-list">			
			{
				displayExpenseForm ? <ExpenseForm /> : renderListUpper()
			}
			{
				!displayExpenseForm && renderList()
			}
		</div>
	)
}

export default ExpenseList