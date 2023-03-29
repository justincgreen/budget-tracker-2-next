// Accounts for two decimal places in a number
export const convertNumber = (amount) => {
  return Math.floor(amount*100)/100
}