import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Navicon from '@/components/Navicon';

// Components
import ExpensesBlock from '@/components/ExpensesBlock';

export default function Expenses() {	
	return (
		<>
			<Head>
				<title>Expenses</title>
				<meta name="description" content="Expense List" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			
			<main className="main">
				<Navigation />				
				
				<div className="page__wrapper">
					<Navicon />
					<ExpensesBlock />
					
					<section className="section__container">
						<section className="section__content">
							Expense Page
						</section>
					</section>
				</div>
			</main>
		</>
	)
}