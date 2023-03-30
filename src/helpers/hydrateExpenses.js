// Get global expenses from local storage
export const hydrateExpenses = () => {
  const data = localStorage.getItem('local-expenses-amount');
  
  if(data) {
    return JSON.parse(data);
  }else {
    return 0;
  }  
}