import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const ButtonGroup = () => {
	const { addExpenseForm, setAddExpenseForm } = useContext(GlobalContext);
	
	const displayExpenseForm = () => {
		setAddExpenseForm(!addExpenseForm);
	}
	
	return (
		<div className="c-button-group">
			<button className="button" onClick={displayExpenseForm}>Add Expenses</button>
			<button className="button">View Expenses</button>
			<button className="button">View Chart</button>
		</div>
	)
}

export default ButtonGroup
