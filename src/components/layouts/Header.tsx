import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css'
import { ArrowUpRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'

const Header: React.FC = () => {
  return (
    <>
      <div className="h-0"></div>
      <header 
        className={`
          ${styles.headerText} fixed w-full
        `}
      >
        <div className="h-16
            grid grid-cols-8 items-center
            max-w-7xl m-auto px-3 md:px-8 2xl:px-0
          ">
          <div className="col-span-3">
            <img src="/logo_text.svg" alt="Logo" className="h-full" />
          </div>

          <div className={`col-span-2 text-center text-sm font-thin`}>
            Geekguys Devs &copy; 2023
          </div>
          <div className="col-span-3 flex justify-end">
            <Link href="/get-started" 
                className="
                  font-thin
                    px-2 whitespace-nowrap
                    border rounded-full flex
                    gap-1
                "
            >
              GET STARTED
              <ArrowTopRightOnSquareIcon width={15}/>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
