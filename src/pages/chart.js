import { useContext } from 'react';
import GlobalContext from '@/context/GlobalContext';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";


import Head from 'next/head';
import Link from 'next/link';

// Components
import Navigation from '@/components/Navigation';
import Navicon from '@/components/Navicon';
import Footer from '@/components/Footer';

export default function Chart() {
  const { 
     globalIncome,
     globalExpenses
   } = useContext(GlobalContext);
   
  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [globalIncome, globalExpenses],
        label: '$',
        backgroundColor: [          
          'rgba(0, 255, 6, 0.4)',
          'rgba(255, 76, 71, 0.4)'        
        ],
        borderColor: [
          '#00ff06',
          '#ff4c47'
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <>
      <Head>
      <title>Chart</title>
      <meta name="description" content="Expenses Chart" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="main">
        <Navigation />				
        
        <div className="page__wrapper">
          <Navicon />
          
          <section className="section__container">
            <section className="section__content">
              <div className="chart-wrapper">
                <Doughnut data={data} />
              </div>
            </section>
          </section>
          
          <Footer />
        </div>
      </main>
    </>
  )
}