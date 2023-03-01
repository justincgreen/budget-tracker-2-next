import { useEffect, useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

const IncomeBlock = () => {
	const { globalIncome, setGlobalIncome } = useContext(GlobalContext);
	
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
	},[]);
	
	return (
		<div className="c-amount-block">
			<h1 className="c-amount-block__page-title">Income</h1>
			<h2 className="c-amount-block__amount-title animate-number" amount={globalIncome}>0</h2>
		</div>
	)
}

export default IncomeBlock