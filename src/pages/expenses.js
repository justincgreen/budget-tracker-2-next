import Head from 'next/head'
import Link from 'next/link'

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
			
			<main>
				<ExpensesHeader />
				<Link href="/">Home</Link>
				Expense Page
			</main>
		</>
	)
}