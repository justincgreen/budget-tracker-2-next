import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';

import Head from 'next/head'

// Components
import Header from '@/components/Header';
import AddExpenseForm from '@/components/AddExpenseForm';
import ButtonGroup from '@/components/ButtonGroup';

export default function Home() {
  const { addExpenseForm, setAddExpenseForm } = useContext(GlobalContext);
  
  return (
    <>
      <Head>
        <title>Budget Tracker 2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Header />
        <ButtonGroup />        
        
        {
          addExpenseForm && <AddExpenseForm />
        }
      </main>
    </>
  )
}
