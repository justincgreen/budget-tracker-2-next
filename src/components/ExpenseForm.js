import { useState, useContext } from 'react';
import{ generateID } from '../helpers/generateID';
import{ currentDate } from '../helpers/currentDate';
import GlobalContext from '@/context/GlobalContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ExpenseForm = () => {
	const { 
		displayExpenseForm, 
		setDisplayExpenseForm,
		globalBalance,
    setGlobalBalance,
    globalExpenses,
		setGlobalExpenses,
    globalIncome,
		transactions,
		setTransactions
	} = useContext(GlobalContext);
	
  // Isolated Component States
	const [expenseDescription, setExpenseDescription] = useState('');
	const [expenseAmount, setExpenseAmount] = useState(0);
	const [expenseSuccessMsg, setExpenseSuccessMsg] = useState(false);
	const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);
	const [displayHelperTags, setDisplayHelperTags] = useState(false);
	const [billFlag, setBillFlag] = useState(false);
	const [groceryFlag, setGroceryFlag] = useState(false);
	
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
      bill: billFlag,
      grocery: groceryFlag,
			timestamp: currentDate()
		}
		
    // Add new transaction to main transaction array
		const newTransaction = [...transactions, currentTransaction];
		setTransactions(newTransaction);
    
    // Add updated transactions array to local storage
    localStorage.setItem('local-transactions', JSON.stringify(newTransaction));
		
    // Success message
		setExpenseSuccessMsg(true);
		setDisableSubmitBtn(true);
    
    // Generate updated global expenses amount
    const generateGlobalExpensesAmount =  parseFloat(expenseAmount) + parseFloat(globalExpenses);
    
		setGlobalExpenses(generateGlobalExpensesAmount.toFixed(2)); // convert to string with two decimal places
    
    //Add generated global expenses amount to local storage
    localStorage.setItem('local-expenses-amount', JSON.stringify(generateGlobalExpensesAmount.toFixed(2)));
    
    // Update global balance
    const updatedBalance = parseFloat(globalIncome) - parseFloat(generateGlobalExpensesAmount);
    setGlobalBalance(updatedBalance);
    
    //Add generated global balance amount to local storage
    localStorage.setItem('local-balance-amount', JSON.stringify(updatedBalance.toFixed(2)));
		
		// Remove success message, re-enable the submit button, reset bill flag checkbox to false
		setTimeout(() => {
			setExpenseSuccessMsg(false);
			setDisableSubmitBtn(false);
      setBillFlag(false);
      setGroceryFlag(false);
      document.querySelector('.c-expense-list__bill-flag').checked = false;
      document.querySelector('.c-expense-list__grocery-flag').checked = false;
		},1500);
	}
  
  //---------------------------------------------------------------------------------------
	
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
  
  //---------------------------------------------------------------------------------------
  // Helper Tags
  const handleTags = () => {
    setDisplayHelperTags(!displayHelperTags);
  }
  
  const captureTagText = (e) => {
    const inputField = document.querySelector('.form__description');
    inputField.value = e.target.innerText;
    setExpenseDescription(e.target.innerText);
  }
  
  //---------------------------------------------------------------------------------------
  
  // Bill Flag
  const handleBillFlag = () => {
    setBillFlag(!billFlag);
  }
  
  // Grocery Flag
  const handleGroceryFlag = () => {
    setGroceryFlag(!groceryFlag);
  }
  
  //---------------------------------------------------------------------------------------
	
	// Render functions - local components
	const renderListUpper = () => {
		return (
      <>
			  <div className="c-expense-list__upper">
				  <h2 className="c-expense-list__title">Add Expense</h2> 
				  <button className="button" onClick={handleDisplayForm}>View Expenses</button>        	
			  </div>
        
        <div className="c-expense-list__helper-tags">
          <div className="c-expense-list__helper-tags-upper">
            <span>Show helper tags?</span>
            <input type="checkbox" className="c-expense-list__checkbox" onChange={handleTags} />	
          </div>
          {
            displayHelperTags
            ?
            <div className="button-group">
              <button className="button button__badge" onClick={captureTagText}>Groceries</button>
              <button className="button button__badge" onClick={captureTagText}>Coffee</button>
              <button className="button button__badge" onClick={captureTagText}>Dining</button>
              <button className="button button__badge" onClick={captureTagText}>Savings</button>
              <button className="button button__badge" onClick={captureTagText}>Investments</button>
            </div>
            :
            null
          }
        </div>                
      </>
		)
	}
	
	const renderForm = () => {
		return (
			<form className="form__add-expense">
				<label className="form__label">Description</label>
				<input type="text" placeholder="Enter Description" className="form__description form__input form__input--100" onChange={captureExpenseDescription} />
				<label className="form__label">Amount</label>
				<input type="number" min="0" placeholder="Enter Amount" className="form__amount form__input form__input--100" onChange={captureExpenseAmount} />
        <div class="form__flags">
          <div className="form__item-flag">
            <span>Bill Label</span>
            <input type="checkbox" className="c-expense-list__checkbox c-expense-list__bill-flag" onChange={handleBillFlag} />               
          </div>
          <div className="form__item-flag">
            <span>Grocery Label</span>
            <input type="checkbox" className="c-expense-list__checkbox c-expense-list__grocery-flag" onChange={handleGroceryFlag} />               
          </div>
        </div>
				{
					disableSubmitBtn 
					?
					<button className="button" disabled>Add Expense</button>
					:
					<button className="button" onClick={captureFormData}>Add Expense</button>
				}
				
				{
					expenseSuccessMsg 
          ? 
          <div className="form__success-message">
            <div className="form__success-message-icon">
              <CheckCircleIcon sx={{ color: '#03e084', fontSize: '100px' }} />
              <h2>Success</h2>
            </div>
          </div>
          : 
          null
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
