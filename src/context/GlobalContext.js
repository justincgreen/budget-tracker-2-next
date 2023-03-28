import { useState, createContext } from 'react';

const GlobalContext = createContext(null);

export const GlobalProvider = (props) => {    
	// Balances
	const [globalBalance, setGlobalBalance] = useState(0);
	const [globalIncome, setGlobalIncome] = useState(0);
	const [globalExpenses, setGlobalExpenses] = useState(1000);
	
	// Expenses
	const [displayExpenseForm, setDisplayExpenseForm] = useState(false);
	const [addExpenseForm, setAddExpenseForm] = useState(false);
	const [transactions, setTransactions] = useState([]);	
	
	// Modal
	const [displayModal, setDisplayModal] = useState(false);
	const [displayIncomeForm, setDisplayIncomeForm] = useState(false);
		
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
			displayModal,
			setDisplayModal,
			displayIncomeForm,
			setDisplayIncomeForm,
			transactions,
			setTransactions
		}}>
		{props.children}
		</GlobalContext.Provider>
	);
}

export default GlobalContext;