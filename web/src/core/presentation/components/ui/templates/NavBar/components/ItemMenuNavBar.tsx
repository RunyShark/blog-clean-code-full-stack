import React from 'react';

import { Routes } from '..';
import styles from '../navBar.module.scss';
import { Link } from 'react-router-dom';
import { Text } from '../../../atoms';

export const ItemMenuNavBar: React.FC<Routes> = ({ name, path }) => {
  return (
    <li>
      <Link
        to={path}
        className={`${styles.nav__item} ${
          path === window.location.pathname
            ? 'text-white rounded inline md:text-[#a649f8]  bg-[#1c8eff] md:bg-transparent'
            : 'text-white'
        }`}
        aria-current="page"
      >
        <Text>{name}</Text>
      </Link>
    </li>
  );
};
