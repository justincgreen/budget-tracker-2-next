import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

import Head from 'next/head';
import Link from 'next/link';

// Components
import Navigation from '@/components/Navigation';
import Navicon from '@/components/Navicon';
import BillsBlock from '@/components/BillsBlock';
import ExpenseList from '@/components/ExpenseList';
import Modal from '@/components/Modal';
import Footer from '@/components/Footer';

export default function Bills() {
  const { 
     globalBills,
     setGlobalBills 
   } = useContext(GlobalContext);
   
  return (
  <>
    <Head>
    <title>Bills</title>
    <meta name="description" content="Expense List" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <main className="main">
      <Navigation />				
      
      <div className="page__wrapper">
        <Navicon />
        <BillsBlock />
        
        <section className="section__container">
          <section className="section__content">
            {/* <ExpenseList /> */}
          </section>
        </section>
        
        <Footer />
      </div>
    </main>
  </>
  )
}