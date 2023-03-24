import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

const Modal = () => {
	const { 
		displayModal,
		setDisplayModal,
		displayIncomeForm, 
		setDisplayIncomeForm 
	} = useContext(GlobalContext);
	
	const closeModal = () => {
		setDisplayModal(false);
		setDisplayIncomeForm(false);
	}
	
	return (
		<div className="c-modal">
			<h1>Modal</h1>
			<div>
				<button className="button" onClick={closeModal}>Close Modal</button>
			</div>
			
			{
				displayIncomeForm && <h2>Edit Income Form</h2>
			}
		</div>
	)
}

export default Modal