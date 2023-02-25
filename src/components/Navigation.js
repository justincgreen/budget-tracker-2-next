import Link from 'next/link'

const Navigation = () => {
	return (
		<nav className="c-navigation">
			<ul>
				<li>
					<Link href="/">Dashboard</Link>
				</li>
				<li>
					<Link href="expenses">Expenses</Link>
				</li>
				<li>
					<Link href="/">Add Expense</Link>
				</li>
				<li>
					<Link href="/">Chart</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation