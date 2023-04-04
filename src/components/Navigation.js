import Link from 'next/link'

const Navigation = () => {
	const closeNav = (e) => {
		// Give the illusion of a seamless page load when the menu open and closes
		const navicon = document.querySelector('.c-navicon');
		const pageWrapper = document.querySelector('.page__wrapper');
		
		// Prevent link from loading once clicked initially & remove selected elements active classes
		e.preventDefault();
		navicon.classList.remove('is-active');
		pageWrapper.classList.remove('is-active');
		
		// Redirect to target link
		setTimeout(() => {
			window.location.href = e.target.href;
		}, 50);
	}
	
	return (
		<nav className="c-navigation">
			<ul>
				<li>
					<Link href="/" onClick={closeNav}>Home</Link>
				</li>
				<li>
					<Link href="/expenses" onClick={closeNav}>Expenses</Link>
				</li>
				<li>
					<Link href="/" onClick={closeNav}>Chart</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation