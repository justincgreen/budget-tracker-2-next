import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

import Head from 'next/head'

// Components
import BalanceBlock from '@/components/BalanceBlock';
import IncomeBlock from '@/components/IncomeBlock';
import ExpensesBlock from '@/components/ExpensesBlock';
import Modal from '@/components/Modal';
import Transactions from '@/components/Transactions';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import ButtonGroup from '@/components/ButtonGroup';
import Footer from '@/components/Footer';

export default function Home() {
 const { 
   displayModal,
   globalIncome,
   setGlobalIncome
 } = useContext(GlobalContext);
  
  return (
    <>
      <Head>
        <title>Budget Tracker 2</title>
        <meta name="description" content="Budget tracker tool to help manage finanaces" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="main">                          
        <Navigation /> 
        
        <div className="page__wrapper">
          <div className="page__blocks-wrapper">
            <BalanceBlock />
            <IncomeBlock />
            <ExpensesBlock />
          </div>
          
          <section className="section__container">
            <div className="section__content">
              <h2>Latest Expenses</h2>
              <Transactions />
            </div>
          </section>
          
          {
            displayModal ? <Modal /> : null
          }
          
          <Footer />
        </div>
      </main>            
    </>
  )
}
