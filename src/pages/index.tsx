import Head from 'next/head'
import { Inter } from '@next/font/google'
import Header from '../components/layouts/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import About from '../components/About'
import GoToApp from '../components/GoToApp'
import Footer from '../components/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Portfolioplus</title>
        <meta name="description" content="Portfolioplus is the ultimate tool for creating and managing professional online portfolios. With customizable templates and a variety of features, you can showcase your skills and achievements in a way that truly reflects your unique personality and brand. Whether you're an artist, designer, photographer, or any other creative professional, Portfolioplus has you covered. Start creating and managing your online portfolio today with Portfolioplus!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className={`flex flex-col gap-6 md:gap-4 min-h-screen m-auto static`}>
        <Header/>
        <Hero/>
        <About/>
        <Features/>
        <GoToApp/>
        <Footer/>
      </main>
    </>
  )
}
