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
  const donutData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
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
              <h1>Chart Page</h1>
              <Doughnut data={donutData} />
            </section>
          </section>
          
          <Footer />
        </div>
      </main>
    </>
  )
}