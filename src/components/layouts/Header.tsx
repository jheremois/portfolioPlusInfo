import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Header.module.css'

const Header: React.FC = () => {
  return (
    <>
      <div className="py-6"></div>
      <header 
        className={`
          ${styles.headerText} fixed h-16
          grid grid-cols-8 gap-4 items-center px-4 
          w-full max-w-7xl
        `}
      >
        <div className="col-span-2">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </div>
        <div className={`col-span-4 text-center text-sm font-thin`}>
          Geekguys Devs &copy; 2023
        </div>
        <div className="col-span-2 flex justify-end">
          <Link href="/get-started" 
              className="
                font-thin
                  px-2 whitespace-nowrap 
                  border rounded-full
              "
          >
            Get started
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
