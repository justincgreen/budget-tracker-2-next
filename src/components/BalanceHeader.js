import { useEffect } from 'react';
import Navicon from './Navicon';

const BalanceHeader = () => {
	useEffect(() => {
		const counter = document.querySelector('.animate-number');
		const speed = 300;
		
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
	},[]);	 
	
	return (
		<div className="c-app-header">
			<Navicon />
			<h1 className="c-app-header__page-title" >Balance</h1>
			<h2 className="c-app-header__balance-amount animate-number" amount="2000">0</h2>
		</div>
	)
}

export default BalanceHeader
