import Head from 'next/head';
import Link from 'next/link';

// Components
import Navigation from '@/components/Navigation';
import Navicon from '@/components/Navicon';
import GroceriesBlock from '@/components/GroceriesBlock';
import GroceriesList from '@/components/GroceriesList';
import Footer from '@/components/Footer';

export default function Groceries() {
   
  return (
  <>
    <Head>
    <title>Groceries</title>
    <meta name="description" content="Groceries" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <main className="main">
      <Navigation />				
      
      <div className="page__wrapper">
        <Navicon />
        <GroceriesBlock />
        
        <section className="section__container">
          <section className="section__content">
            <GroceriesList />
          </section>
        </section>
        
        <Footer />
      </div>
    </main>
  </>
  )
}