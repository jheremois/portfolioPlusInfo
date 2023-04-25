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
