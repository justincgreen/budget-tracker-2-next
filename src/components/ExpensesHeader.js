import Navicon from './Navicon';

const ExpensesHeader = () => {
	return (
		<div className="c-app-header">
			<Navicon />
			<h1 className="c-app-header__page-title">Expenses</h1>
			{/* <h2 className="c-app-header__balance-amount">$2,000.00</h2> */}
		</div>
	)
}

export default ExpensesHeader
