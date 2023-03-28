import { useEffect, useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

const IncomeBlock = () => {
	const { 
		globalIncome,
		setGlobalIncome,
		displayModal,
		setDisplayModal,
		displayIncomeForm,
		setDisplayIncomeForm 
	} = useContext(GlobalContext);
	
	const editIncome = () => {
		setDisplayModal(true);
		setDisplayIncomeForm(true);
	}
	
	useEffect(() => {
		const counters = document.querySelectorAll('.animate-number');
		const speed = 300;
		
		counters.forEach((counter) => {
			const animateNumber = () => {
				const value = +counter.getAttribute('amount');
				const data = +counter.innerText;
				const time = value / speed;
				
				if(data < value) {
					counter.innerText = Math.ceil(data + time);
					setTimeout(animateNumber, 1);
				}else{
					counter.innerText = '$' + parseFloat(value).toLocaleString('en', {minimumFractionDigits: 2});					
				}		 
			}
			animateNumber();
		});				
	},[globalIncome]);
	
	return (
		<div className="c-amount-block c-amount-block--income">
			<h1 className="c-amount-block__page-title">Income</h1>			
				<h2 className="c-amount-block__amount-title animate-number" amount={globalIncome}>{globalIncome}</h2>
				<div className="c-amount-block__amount-edit">
					<button className="button button__edit-income" onClick={editIncome}>Edit</button>
				</div>
		</div>
	)
}

export default IncomeBlock