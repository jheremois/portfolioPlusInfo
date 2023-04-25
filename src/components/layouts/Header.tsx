import React from 'react';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <>
      <div className="h-8"></div>
      <header 
        style={{
          /* mixBlendMode: "difference", */
          /* backdropFilter: "blur(10px)" */
        }}
        className={`
          z-50
          bg-opacity-40
          bg-white
          fixed w-full
          backdrop-blur-md
        `}

      >
        <div className="
            h-11
            grid grid-cols-8 items-center
            max-w-7xl m-auto px-3 md:px-8 2xl:px-0
          ">
          <div className="col-span-3">
            <Image 
              width={150}
              height={0}
              src="/logo_atl.svg" alt="Logo"
            />
          </div>

          <div className={`col-span-2 text-center text-sm font-thin`}>
            {/* Geekguys Devs &copy; 2023 */}
          </div>
          <div className="col-span-3 flex justify-end">
            <Link
                href={'https://portfolioplus-dun.vercel.app/'} 
                target='_blank'
                className="
                  font-light
                  px-2 whitespace-nowrap
                  border rounded-full flex
                  gap-1 duration-150
                  hover:bg-white
                  hover:text-black
                "
            >
              Get started
              <ArrowTopRightOnSquareIcon width={15}/>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
