import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto pb-5 w-full">
      <div className="mx-3 md:mx-8 2xl:mx-0 rounded-3xl overflow-hidden">
        <div className="bg-black px-8 py-10 text-lightGray">
            <div className="grid gap-10 md:grid-cols-3 md:gap-36 md:text-sm text-base">
                <div className="flex flex-col gap-6 justify-start">
                    <div className='h-10 flex gap-2'>
                        <Image 
                            width={40}
                            height={40}
                            className='h-10 w-10'
                            src="/altLogo.png" alt=""
                        />
                        <h1 className='font-semibold text-3xl text-white'>
                            PortfolioPlus
                        </h1>
                    </div>
                    <p>
                    Create and manage professional online portfolios with Portfolioplus. The ultimate tool for showcasing your skills and achievements.  
                    </p>
                </div>
                <div className="flex flex-col gap-2 md:gap-6 justify-start">
                    <h4 className='text-lg font-semibold'>
                        Quick Menu
                    </h4>
                    <div className="nav flex flex-col gap-5">
                        <Link href="" className='hover:text-white'>
                            Back to top
                        </Link>
                        <Link href="" className='hover:text-white'>
                            Developers info
                        </Link>
                        <Link href="" className='hover:text-white'>
                            contact
                        </Link>
                    </div>
                </div>
                <div 
                    className="
                        flex flex-col gap-2 md:gap-6 justify-start
                        md:text-sm text-base
                    "
                >
                    <h4 className='text-lg font-semibold'>
                        Learn More
                    </h4>
                    <div className="flex flex-col gap-5">
                        <Link href="" className='hover:text-white'>
                            Privacy policy
                        </Link>
                        <Link href="" className='hover:text-white'>
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-12 mb-4">
                <div className="border-t border-lightGray w-full h-1"/>
            </div>
            <div 
                className="
                    grid md:grid-cols-3
                    md:flex-row gap-6
                    md:items-center text-lightGray md:text-sm
                "
            >
                <p className='col-span-1'>
                    Developed by <Link href={''} className='font-semibold underline'>Geek Guys Studio </Link>
                </p>
                <p className='col-span-1 flex md:justify-center'>
                    Copyright &copy; 2023. All rights reserved
                </p>
                <div className="navFooter col-span-1 md:justify-end flex justify-center gap-8 md:gap-4 md:flex-row">
                    <Link href="" className='hover:text-white'>
                        <img src="/ig-icon.png" alt="" width={20} className='w-8 md:w-5'/>
                    </Link>
                    <Link href="" className='hover:text-white'>
                        <img src="/twitter-icon.png" alt="" width={20} className='w-8 md:w-5'/>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
