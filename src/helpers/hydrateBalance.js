// Get global balance from local storage
export const hydrateBalance = () => {
  const data = localStorage.getItem('local-balance-amount');
  
  if(data) {
    return JSON.parse(data);
  }else {
    return 0;
  }  
}