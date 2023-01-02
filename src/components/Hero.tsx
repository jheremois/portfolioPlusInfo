import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div 
      className="
        m-4 bg-bgAtl flex flex-col justify-center items-center
        rounded-2xl px-4 py-6 md:flex-row md:px-8 md:py-12
      "
    >
      <div className="portfoliPlus_hero_lSide mb-12">
        <div className="text-4xl md:text-5xl font-bold">
          <div className='underline underline-offset-1'>
            CREATING YOUR
          </div>
          PORTFOLIO NEVER BEEN THAT EASY
        </div>
        <div className="mt-6 md:mt-9">
          <Link href="/get-started" 
          >
            <button
              className="
                px-4 py-2 font-semibold rounded-full
                bg-primary text-white w-full md:w-fit
              "
            >
              Get started
            </button>
          </Link>
        </div>
      </div>
      <div className="portfoliPlus_hero_rSide">
        <img src="/portfolioplus_hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;