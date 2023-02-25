import { useState, createContext } from 'react';

const GlobalContext = createContext(null);

export const GlobalProvider = (props) => {
	// Balances
	const [globalBalance, setGlobalBalance] = useState(4000);
	
	const [addExpenseForm, setAddExpenseForm] = useState(false);
	
	return (
		<GlobalContext.Provider value={{
			globalBalance,
			setGlobalBalance,
			addExpenseForm,
			setAddExpenseForm
		}}>
		{props.children}
		</GlobalContext.Provider>
	);
}

export default GlobalContext;