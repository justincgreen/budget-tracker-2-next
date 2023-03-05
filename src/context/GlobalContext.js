import { useState, createContext } from 'react';

const GlobalContext = createContext(null);

export const GlobalProvider = (props) => {
	// Balances
	const [globalBalance, setGlobalBalance] = useState(4000);
	const [globalIncome, setGlobalIncome] = useState(5000);
	const [globalExpenses, setGlobalExpenses] = useState(2000);
	
	// Expenses
	const [displayExpenseForm, setDisplayExpenseForm] = useState(false);
	const [addExpenseForm, setAddExpenseForm] = useState(false);
	const [transactions, setTransactions] = useState([]);
	
	
	return (
		<GlobalContext.Provider value={{
			globalBalance,
			setGlobalBalance,
			globalIncome,
			setGlobalIncome,
			globalExpenses,
			setGlobalExpenses,
			displayExpenseForm,
			setDisplayExpenseForm,
			addExpenseForm,
			setAddExpenseForm,
			transactions,
			setTransactions
		}}>
		{props.children}
		</GlobalContext.Provider>
	);
}

export default GlobalContext;