const Navicon = () => {
	const toggleNavigation = (e) => {
		const navicon = e.target.closest('.c-navicon');
		navicon.classList.toggle('is-active');
	}
	
	return (
		<button className="c-navicon" onClick={toggleNavigation}>
			<span className="c-navicon__bar"></span>
			<span className="c-navicon__bar"></span>
			<span className="c-navicon__bar"></span>
		</button>
	)
}

export default Navicon