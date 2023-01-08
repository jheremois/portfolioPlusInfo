import React from 'react';
import Link from 'next/link';
import styles from '../styles/Hero.module.css'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';


const Hero: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div 
        className={`
          ${styles.heroBg}
          flex flex-col justify-center items-center
          rounded-3xl px-4 py-14
          md:flex-row md:px-8 md:py-16 mx-3 md:mx-8 2xl:mx-0
        `}
      >
        <div className="portfoliPlus_hero_lSide mb-12">
          <h1 className="text-4xl md:text-5xl font-bold md:leading-11 tracking-wide">
              <div className="">
                CREATING YOUR
              </div>
              <div className="">
                PORTFOLIO NEVER BEEN THAT EASY
              </div>
          </h1>
          <div className="mt-6 md:mt-9">
            <Link href="/" 
            >
              <button
                className="
                  px-5 py-3 font-semibold rounded-full text-xl md:text-lg
                  bg-primary text-white w-fit
                  flex items-center gap-1
                  duration-150
                  hover:bg-primaryAlt
                "
              >
                Get started
                <ArrowRightIcon scale={1} width="22"/>
              </button>
            </Link>
          </div>
        </div>
        <div className="portfoliPlus_hero_rSide">
          <Image
            src="/portfolioplus_hero.png" alt=""
            className='-translate-x-3 md:translate-x-0'
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;