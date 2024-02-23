import React, { useEffect, useState } from 'react';

import { Routes } from '..';
import styles from '../navBar.module.scss';
import { Link } from 'react-router-dom';
import { Text } from '../../../atoms';
import { useWindowSize } from '../../../../../hooks/useWindowSize';

interface MenuNavBarProps {
  routes: Routes[];
}

export const MenuNavBar: React.FC<MenuNavBarProps> = () => {
  const { isTablet } = useWindowSize();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!isTablet) return;
    setIsOpen(false);
  }, [isTablet]);

  return (
    <div className="w-28 flex flex-col items-end">
      <button
        onClick={toggle}
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        aria-controls="navbar-solid-bg"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <Link
        to={'/'}
        className={`${styles.nav__item} hidden md:flex  ${
          '/home' === window.location.pathname
            ? 'md:text-[#a649f8]'
            : 'text-white'
        }`}
        aria-current="page"
      >
        <Text>Home</Text>
      </Link>
      <div
        className={`absolute top-16 hs-dropdown-menu  w-60 transition-[opacity,margin] duration z-10 rounded-xl bg-[#a649f8] ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Link
          to={'/'}
          onClick={toggle}
          className={`${styles.nav__item} ${
            '/home' === window.location.pathname
              ? 'text-white rounded md:text-[#a649f8]  bg-[#ff00c87b] '
              : 'text-white'
          }`}
          aria-current="page"
        >
          <Text>Home</Text>
        </Link>
        <Link
          to={'/auth/register'}
          onClick={toggle}
          className={`${styles.nav__item} ${
            '/auth/register' === window.location.pathname
              ? 'text-white rounded md:text-[#a649f8]  bg-[#ff00c87b] '
              : 'text-white'
          }`}
          aria-current="page"
        >
          <Text>Registro</Text>
        </Link>
        <Link
          to={'/auth/login'}
          onClick={toggle}
          className={`${styles.nav__item} ${
            '/auth/login' === window.location.pathname
              ? 'text-white rounded md:text-[#a649f8]  bg-[#ff00c87b] '
              : 'text-white'
          }`}
          aria-current="page"
        >
          <Text>Iniciar session</Text>
        </Link>
      </div>
    </div>
  );
};
