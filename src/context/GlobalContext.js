import { useEffect, useState, createContext } from 'react';
import{ hydrateTransactions } from '../helpers/hydrateTransactions';
import{ hydrateBalance } from '../helpers/hydrateBalance';
import{ hydrateExpenses} from '../helpers/hydrateExpenses';
import{ hydrateIncome} from '../helpers/hydrateIncome';

const GlobalContext = createContext(null);

export const GlobalProvider = (props) => {
	// Balances
	const [globalBalance, setGlobalBalance] = useState(0);
	const [globalIncome, setGlobalIncome] = useState(0);
	const [globalExpenses, setGlobalExpenses] = useState(0);
	
	// Expenses
	const [displayExpenseForm, setDisplayExpenseForm] = useState(false);
	const [addExpenseForm, setAddExpenseForm] = useState(false);
	const [transactions, setTransactions] = useState([]);	
  	
	// Modal
	const [displayModal, setDisplayModal] = useState(false);
	const [displayIncomeForm, setDisplayIncomeForm] = useState(false);
	const [displayEditExpenseForm, setDisplayEditExpenseForm] = useState(false);
	const [displayDeleteExpenseForm, setDisplayDeleteExpenseForm] = useState(false);
	const [displayDeleteAllExpensesForm, setDisplayDeleteAllExpensesForm] = useState(false);
  
  // Misc
  const [isolatedExpense, setIsolatedExpense] = useState({});
  
  useEffect(() => {
    // Local storage hydration 
    // At the moment there is a flash of the previous state(s) before using the useEffect method to re-render the new states
    //-----------------------------
    setGlobalBalance(hydrateBalance);
    setGlobalIncome(hydrateIncome);
    setGlobalExpenses(hydrateExpenses);
    setTransactions(hydrateTransactions);
  }, []);
		
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
      displayEditExpenseForm,
      setDisplayEditExpenseForm,
			displayModal,
			setDisplayModal,
			displayIncomeForm,
			setDisplayIncomeForm,
      displayDeleteExpenseForm,
      setDisplayDeleteExpenseForm,
      displayDeleteAllExpensesForm,
      setDisplayDeleteAllExpensesForm,
      isolatedExpense,
      setIsolatedExpense,
			transactions,
			setTransactions
		}}>
		{props.children}
		</GlobalContext.Provider>
	);
}

export default GlobalContext;