import { useState, useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

const Modal = () => {
	const { 
    displayModal,
		setDisplayModal,
		displayIncomeForm, 
		setDisplayIncomeForm,
    globalIncome,
    setGlobalIncome
	} = useContext(GlobalContext);
  
  const [incomeAmount, setIncomeAmount] = useState('');
	
	const closeModal = () => {
		setDisplayModal(false);
		setDisplayIncomeForm(false);
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
    }  
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
      </div>
		</div>
	)
}

export default Modal