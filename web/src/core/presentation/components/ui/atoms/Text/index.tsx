import React from 'react';
import { Typography, TypographyProps } from '../Typography';
import { BaseComponentProps } from '../../../../../domain/baseComponent';

interface TextProps
  extends TypographyProps,
    Partial<Omit<BaseComponentProps, 'children'>> {}

export const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <Typography elementTextType="p" fontSize="text-lg" {...props}>
    {children}
  </Typography>
);
