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
    globalIncome,
    setGlobalIncome,
    globalBalance,
    setGlobalBalance
	} = useContext(GlobalContext);
  
  const [incomeAmount, setIncomeAmount] = useState('');
  const [editExpenseDescription, setEditExpenseDescription] = useState('');
  const [editExpenseAmount, setEditExpenseAmount] = useState(0);
	
	const closeModal = () => {
		setDisplayModal(false);
		setDisplayIncomeForm(false);
		displayEditExpenseForm === true ? setDisplayEditExpenseForm(false) : null;
	}
  
  // Income Form
  const captureIncomeAmount = (e) => {
    setIncomeAmount(parseFloat(e.target.value));
  }
  
  const saveGlobalAmount = () => {
    if(isNaN(incomeAmount) || incomeAmount === 0 || incomeAmount === '') {
      alert()      
    } 
    else {
      setGlobalIncome(Math.floor(incomeAmount*100)/100); // account for two decimals places
      setDisplayIncomeForm(false);
      setDisplayModal(false);
      localStorage.setItem('local-income-amount', JSON.stringify(Math.floor(incomeAmount*100)/100));
      
      // TODO: Need to also update balance amount
      // Income Amount - global expenses amount (generated expenses amount) = updated balance amount
      // Add local storage for that global balance as well
    }  
  }
  
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
      </div>
		</div>
	)
}

export default Modal