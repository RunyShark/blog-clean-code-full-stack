import React from 'react';
import { Title } from '../../atoms';
import { Link } from 'react-router-dom';
import { BaseComponentProps } from '../../../../../domain/baseComponent';

interface LogoProps extends Omit<BaseComponentProps, 'children'> {
  title?: string;
}

export const Logo: React.FC<LogoProps> = ({ title }) => (
  <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
    <img
      src={
        'https://res.cloudinary.com/runyshark1/image/upload/v1708658465/ReactJS_u4qmoq.gif'
      }
      className="object-contain w-20 h-14 object-center"
      alt="logo"
    />
    {title && (
      <Title className="self-center text-xl font-semibold whitespace-nowrap text-white">
        {title}
      </Title>
    )}
  </Link>
);
