import Head from 'next/head';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

// Components
import ExpensesHeader from '@/components/ExpensesHeader';

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
					<ExpensesHeader />				
					Expense Page
				</div>
			</main>
		</>
	)
}