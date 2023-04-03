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
  const [editExpenseDescription, setEditExpenseDescription] = useState(isolatedExpense.description);
  const [editExpenseAmount, setEditExpenseAmount] = useState(isolatedExpense.amount);
	
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
  
  // Delete Single Expense Confirmation  - interconnected with the Transactions component
  const deleteExpenseConfirmation = () => {
    const filterTransactions = transactions.filter((element) => {
      return element.id !== isolatedExpense.id;		  
    });
    
    const updatedExpensesAmount = parseFloat(globalExpenses) - parseFloat(isolatedExpense.amount);
    const updatedBalanceAmount = parseFloat(globalIncome) - parseFloat(updatedExpensesAmount);
    
    setTransactions(filterTransactions);
    localStorage.setItem('local-transactions', JSON.stringify(filterTransactions));
    
    setGlobalExpenses(updatedExpensesAmount.toFixed(2));
    localStorage.setItem('local-expenses-amount', JSON.stringify(updatedExpensesAmount.toFixed(2))); 
    
    setGlobalBalance(updatedBalanceAmount);
    localStorage.setItem('local-balance-amount', JSON.stringify(updatedBalanceAmount));
    
    setIsolatedExpense({}); // need to reset this state so new value can be used later
     
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
   // Update object, updateExpense function returns a new array
   const updateExpense= transactions.map((obj) => {
    return obj.id === isolatedExpense.id ? { ...obj, description: editExpenseDescription, amount: editExpenseAmount } : obj 
   });
   
   setTransactions(updateExpense);
   localStorage.setItem('local-transactions', JSON.stringify(updateExpense));
   
   // Update global expenses
   const updatedGlobalExpenses = () => {
     if(isolatedExpense.amount === editExpenseAmount) { // which means the amount hasn't been changed, close modal
       // Close Modal
       setDisplayModal(false);
       setDisplayEditExpenseForm(false);
     }
     else if(isolatedExpense.amount !== editExpenseAmount){
      // Add the transactions objects amounts together to get the updated globalExpenses amount
      // https://bobbyhadz.com/blog/javascript-get-sum-of-array-object-values
      const sum = updateExpense.reduce((accumulator, objects) => {
       return accumulator + parseFloat(objects.amount);
      }, 0);
       
       setGlobalExpenses(sum);
       localStorage.setItem('local-expenses-amount', JSON.stringify(sum.toFixed(2))); 
       
       // Update global balance
       const updatedGlobalBalance = parseFloat(globalIncome) - parseFloat(sum);
       setGlobalBalance(updatedGlobalBalance.toFixed(2));
       localStorage.setItem('local-balance-amount', JSON.stringify(updatedGlobalBalance.toFixed(2)));
       
       // Close Modal
       setDisplayModal(false);
       setDisplayEditExpenseForm(false);
     }
   }
   
   updatedGlobalExpenses();
   setIsolatedExpense({}); // need to reset this state so new value can be used later   
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
            <input type="type" placeholder="Enter Description" className="c-modal__edit-expense-input" onChange={captureExpenseDescription} value={editExpenseDescription} />
            <input type="number" min="0" placeholder="Enter Amount" className="c-modal__edit-expense-input" onChange={captureExpenseAmount} value={editExpenseAmount} />
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