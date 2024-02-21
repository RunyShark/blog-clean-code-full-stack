import React from 'react';
import { Typography, TypographyProps } from '../Typography';

interface TitleProps extends TypographyProps {}

export const Title: React.FC<TitleProps> = ({ children, ...props }) => (
  <Typography
    elementTextType="h1"
    fontSize="text-5xl"
    fontWeight="font-bold"
    {...props}
  >
    {children}
  </Typography>
);
