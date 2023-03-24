import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

import Head from 'next/head'

// Components
import BalanceBlock from '@/components/BalanceBlock';
import IncomeBlock from '@/components/IncomeBlock';
import ExpensesBlock from '@/components/ExpensesBlock';
import Modal from '@/components/Modal';

import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import ButtonGroup from '@/components/ButtonGroup';

export default function Home() {
 const { displayModal } = useContext(GlobalContext);
  
  return (
    <>
      <Head>
        <title>Budget Tracker 2</title>
        <meta name="description" content="Budget Tracker 2 home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="main">                          
        <Navigation /> 
        
        <div className="page__wrapper">
          <BalanceBlock />
          <IncomeBlock />
          <ExpensesBlock />
          
          <section className="section__container">
            <div className="section__content">
              Content
            </div>
          </section>
          
          {
            displayModal ? <Modal /> : null
          }
        </div>
      </main>
    </>
  )
}
