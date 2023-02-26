import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

import Head from 'next/head'

// Components
import BalanceHeader from '@/components/BalanceHeader';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import AddExpenseForm from '@/components/AddExpenseForm';
import ButtonGroup from '@/components/ButtonGroup';

export default function Home() {
  const { addExpenseForm, setAddExpenseForm } = useContext(GlobalContext);
  
  return (
    <>
      <Head>
        <title>Budget Tracker 2</title>
        <meta name="description" content="Budget Tracker 2 home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="main">
        {/* <Header /> */}
        {/* <ButtonGroup />   */}                     
        
        <Navigation /> 
        
        <div className="page__wrapper">
          <BalanceHeader />
          
          <section className="section__container">
            <div className="section__content">
              Content
            </div>
          </section>
        </div>
        
        {
          addExpenseForm && <AddExpenseForm />
        }
      </main>
    </>
  )
}
