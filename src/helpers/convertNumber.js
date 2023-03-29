// Accounts for two decimal places in a number
export const convertNumber = (amount) => {
  return Math.floor(amount*100)/100
}

// need to try converting a number to a string.toFixed(2) and parseFloat(string) + what ever other number