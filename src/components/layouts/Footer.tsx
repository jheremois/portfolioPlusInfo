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
                    <div className='h-10'>
                        <Image 
                            width={208}
                            height={108}
                            src="logo_text.svg" alt=""
                        />
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
                        Social Media
                    </h4>
                    <div className="flex flex-col gap-5">
                        <Link href="" className='hover:text-white'>
                            Instagram
                        </Link>
                        <Link href="" className='hover:text-white'>
                            Twitter
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-12 mb-4">
                <div className="border-t border-lightGray w-full h-1"/>
            </div>
            <div 
                className="
                    flex justify-between flex-col
                    md:flex-row gap-6
                    md:items-center text-lightGray md:text-sm
                "
            >
                <p>
                    Copyright &copy; 2023. All rights reserved
                </p>
                <div className="navFooter flex gap-6 flex-col md:flex-row">
                    <Link href="" className='hover:text-white'>
                        Privacy policy
                    </Link>
                    <Link href="" className='hover:text-white'>
                        Terms of Service
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
