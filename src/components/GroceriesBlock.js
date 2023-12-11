import { useEffect, useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

const GroceriesBlock = () => {
  const { globalGroceries, setGlobalGroceries } = useContext(GlobalContext);
  
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
          // counter.innerText = '$' + parseFloat(value).toLocaleString('en', {minimumFractionDigits: 2});
          counter.innerText = '$' + parseFloat(value).toFixed(2);
        }		 
      }			
      animateNumber();
    });		
  },[globalGroceries]);
  
  return (
    <div className="c-amount-block c-amount-block--groceries">			
      <h1 className="c-amount-block__page-title">Groceries</h1>
      {<h2 className="c-amount-block__amount-title animate-number" amount={globalGroceries}>{globalGroceries}</h2>}
    </div>
  )
}

export default GroceriesBlock
