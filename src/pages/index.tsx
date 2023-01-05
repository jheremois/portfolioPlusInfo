import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/layouts/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import { StarIcon, SparklesIcon, PencilSquareIcon, ShareIcon } from '@heroicons/react/24/solid'
import About from '../components/About'
import GoToApp from '../components/GoToApp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const features = [
    {
      title: "Customization Powers",
      description: "Make your portfolio stand out with your own logo, banner image, and color scheme.",
      icon: <SparklesIcon width={18}/>
    },
    {
      title: "Customization Powers",
      description: "Make your portfolio stand out with your own logo, banner image, and color scheme.",
      icon: <StarIcon width={18}/>
    },
    {
      title: "Customization Powers",
      description: "Make your portfolio stand out with your own logo, banner image, and color scheme.",
      icon: <PencilSquareIcon width={18}/>
    },
    {
      title: "Customization Powers",
      description: "Make your portfolio stand out with your own logo, banner image, and color scheme.",
      icon: <ShareIcon width={18}/>
    }
  ]  

  return (
    <>
      <Head>
        <title>Portfolioplus</title>
        <meta name="description" content="Portfolioplus is the ultimate tool for creating and managing professional online portfolios. With customizable templates and a variety of features, you can showcase your skills and achievements in a way that truly reflects your unique personality and brand. Whether you're an artist, designer, photographer, or any other creative professional, Portfolioplus has you covered. Start creating and managing your online portfolio today with Portfolioplus!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className={`flex flex-col gap-12 min-h-screen m-auto static`}>
        <Header/>
        <Hero/>
        <Features features={features}
        imageUrl="/content.png"
        />
        <About/>
        <GoToApp/>
      </main>
    </>
  )
}
