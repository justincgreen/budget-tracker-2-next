// Get global income from local storage
export const hydrateIncome = () => {
  const data = localStorage.getItem('local-income-amount');
  
  if(data) {
    return JSON.parse(data);
  }else {
    return 0;
  }  
}