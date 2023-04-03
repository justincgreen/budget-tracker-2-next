import { useState, useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

const Modal = () => {
	const { 
    displayModal,
		setDisplayModal,
		displayIncomeForm, 
		setDisplayIncomeForm,
    displayEditExpenseForm,
    setDisplayEditExpenseForm,
    displayDeleteExpenseForm,
    setDisplayDeleteExpenseForm,
    displayDeleteAllExpensesForm,
    setDisplayDeleteAllExpensesForm,
    isolatedExpense,
    setIsolatedExpense,
    globalIncome,
    setGlobalIncome,
    globalBalance,
    setGlobalBalance,
    globalExpenses,
    setGlobalExpenses,
    transactions,
    setTransactions
	} = useContext(GlobalContext);
  
  // Isolated component states
  const [incomeAmount, setIncomeAmount] = useState('');
  const [editExpenseDescription, setEditExpenseDescription] = useState('');
  const [editExpenseAmount, setEditExpenseAmount] = useState(0);
	
  // Close Modal
	const closeModal = () => {
		setDisplayModal(false);
		setDisplayIncomeForm(false);
		displayEditExpenseForm === true ? setDisplayEditExpenseForm(false) : null;
		displayDeleteExpenseForm === true ? setDisplayDeleteExpenseForm(false) : null;
		displayDeleteAllExpensesForm === true ? setDisplayDeleteAllExpensesForm(false) : null;
    setIsolatedExpense({});
	}
  
  //-----------------------------------------------------------------------------------------------
  
  // Income Form
  const captureIncomeAmount = (e) => {
    setIncomeAmount(parseFloat(e.target.value));
  }
  
  const saveGlobalAmount = () => {
    if(isNaN(incomeAmount) || incomeAmount === '') {
      alert()      
    } 
    else {
      setGlobalIncome(Math.floor(incomeAmount*100)/100); // account for two decimals places
      setGlobalBalance(Math.floor(incomeAmount*100)/100 - parseFloat(globalExpenses));
      setDisplayIncomeForm(false);
      setDisplayModal(false);
      localStorage.setItem('local-income-amount', JSON.stringify(Math.floor(incomeAmount*100)/100));
      localStorage.setItem('local-balance-amount', JSON.stringify(Math.floor(incomeAmount*100)/100) - parseFloat(globalExpenses));
    }  
  }
  
  //-----------------------------------------------------------------------------------------------
  
  // Delete Expense Confirmation  - interconnected with the Transactions component
  const deleteExpenseConfirmation = () => {
    const filterTransactions = transactions.filter((element) => {
      return element.id !== isolatedExpense.id;		  
    });
    
    const updatedExpensesAmount = parseFloat(globalExpenses) - parseFloat(isolatedExpense.amount);
    
    setTransactions(filterTransactions);
    localStorage.setItem('local-transactions', JSON.stringify(filterTransactions));
    
    setGlobalExpenses(updatedExpensesAmount.toFixed(2));
    localStorage.setItem('local-expenses-amount', JSON.stringify(updatedExpensesAmount.toFixed(2))); 
    
    setIsolatedExpense({}); // need to reset this so new value can be used later
    
    // Eventually will need to update the global balance as well Income - Expenses = balance
    
    // Hide modal
    setDisplayModal(false);
    setDisplayDeleteExpenseForm(false);
  }
  
  //-----------------------------------------------------------------------------------------------
  
  // Delete All Expenses
  const deleteAllExpensesConfirmation = () => {
    const resetExpenses = 0;
    
    setTransactions([]);
    setGlobalExpenses(resetExpenses);
    setGlobalBalance(globalIncome);
    localStorage.setItem('local-transactions', '[]');
    localStorage.setItem('local-expenses-amount', JSON.stringify(resetExpenses.toFixed(2)));
    localStorage.setItem('local-balance-amount', JSON.stringify(globalIncome));
    
    setDisplayModal(false);
    setDisplayDeleteAllExpensesForm(false);
  }
  
  //-----------------------------------------------------------------------------------------------
  
  // Edit Expense
  const captureExpenseDescription = (e) => {
    setEditExpenseDescription(e.target.value);
  }
  
  const captureExpenseAmount = (e) => {
    setEditExpenseAmount(e.target.value);
  }
  
  const saveUpdatedExpense = () => {
    console.log(editExpenseDescription, parseFloat(editExpenseAmount).toFixed(2));
    // On click the expense description and amount will need to be updated in the DOM and in local storage
    // The updated amount will also need to be reflected in the global balance
    // some type of logic that says if new number is greater then old amount add to global balance
    // if new number is lower than old amount then subtract from global balance
  }
	
	return (
		<div className="c-modal">
			<div className="c-modal__wrapper">
				<button className="button button__close-modal" onClick={closeModal}>Close</button>			
			
			  {
				  displayIncomeForm
          ?
          <div>
            <h2>Income Amount</h2>
            <input type="number" min="0" placeholder="Enter Amount" className="c-modal__income-form" onChange={captureIncomeAmount} />
            <button className="button" onClick={saveGlobalAmount}>Save</button>
          </div>
          :
          null
			  }
        
        {
          displayEditExpenseForm 
          ?
          <div>
            <h2>Edit Expense</h2>
            <input type="type" placeholder="Enter Description" className="c-modal__edit-expense-input" onChange={captureExpenseDescription} />
            <input type="number" min="0" placeholder="Enter Amount" className="c-modal__edit-expense-input" onChange={captureExpenseAmount} />
            <button className="button" onClick={saveUpdatedExpense}>Save</button>
          </div>
          :
          null
        }
        
        {
          displayDeleteExpenseForm
          ?
          <div>
            <h2>Delete Expense?</h2>
            <div className="button-group">
             <button className="button" onClick={deleteExpenseConfirmation}>Yes</button>
             <button className="button" onClick={closeModal}>No</button>
            </div>
          </div>
          :
          null
        }
        
        {
          displayDeleteAllExpensesForm
          ?
          <div>
            <h2>Delete All Expenses?</h2>
            <div className="button-group">
             <button className="button" onClick={deleteAllExpensesConfirmation}>Yes</button>
             <button className="button" onClick={closeModal}>No</button>
            </div>
          </div>
          :
          null
        }
      </div>
		</div>
	)
}

export default Modal