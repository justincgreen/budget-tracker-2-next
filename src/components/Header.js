const Header = () => {
	return (
		<div className="c-header">
			<div className="c-header__upper">
				<h1>Budget Tracker 2</h1>
			</div>
			
			<div className="c-header__balance-blocks">
				<div className="c-header__balance-block">
					<h2 className="c-header__balance-block-label">Balance</h2>
					<h2 className="c-header__balance-block-title">$1,000.00</h2>
				</div>
				
				<div className="c-header__balance-block">
					<h2 className="c-header__balance-block-label">Income</h2>
					<h2 className="c-header__balance-block-title text-green">$2,000.00</h2>
				</div>
				
				<div className="c-header__balance-block">
					<h2 className="c-header__balance-block-label">Expenses</h2>
					<h2 className="c-header__balance-block-title text-red">$1,000.00</h2>
				</div>
			</div>
		</div>
	)
}

export default Header