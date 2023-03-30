// Get transactions from local storage
export const hydrateTransactions = () => {
  const data = localStorage.getItem('local-transactions');
  
  if(data) {
    return JSON.parse(data);
  }else {
    return [];
  }  
}