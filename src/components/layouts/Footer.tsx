import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto pb-5 md:py-6 w-full">
      <div className="mx-3 md:mx-8 2xl:mx-0 rounded-3xl overflow-hidden">
        <div className="bg-black px-8 py-16 text-lightGray">
            <div className="grid md:grid-cols-3 md:gap-36">
                <div className="flex flex-col gap-6 justify-start">
                    <div className='h-10'>
                        <img src="logo_text.svg" alt="" className='h-full'/>
                    </div>
                    <p>
                    Create and manage professional online portfolios with Portfolioplus. The ultimate tool for showcasing your skills and achievements.  
                    </p>
                </div>
                <div className="flex flex-col gap-6 justify-start">
                    <h4 className='text-lg font-semibold'>
                        Quick Menu
                    </h4>
                    <div className="nav flex flex-col gap-3">
                        <Link href="" >
                            Back to top
                        </Link>
                        <Link href="" >
                            Developers info
                        </Link>
                        <Link href="" >
                            contact
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-6 justify-start">
                    <h4 className='text-lg font-semibold'>
                        Social Media
                    </h4>
                    <div className="flex flex-col gap-3">
                        <Link href="" >
                            Instagram
                        </Link>
                        <Link href="" >
                            Twitter
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-12 mb-8">
                <div className="border-t border-lightGray w-full h-1"/>
            </div>
            <div className="flex justify-between items-center text-lightGray">
                <p>
                    Copyright &copy; 2023. All rights reserved
                </p>
                <div className="navFooter flex gap-6">
                    <Link href="" >
                        Privacy policy
                    </Link>
                    <Link href="" >
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
