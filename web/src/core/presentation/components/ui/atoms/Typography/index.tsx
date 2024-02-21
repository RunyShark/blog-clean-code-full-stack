import React, { ReactNode, createElement } from 'react';

import {
  BaseComponentProps,
  Color,
  TextAlign,
} from '../../../../../domain/baseComponent';

type ElementTextType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

type FontWeight =
  | 'font-thin'
  | 'font-extralight'
  | 'font-light'
  | 'font-normal'
  | 'font-medium'
  | 'font-semibold'
  | 'font-bold'
  | 'font-extrabold'
  | 'font-black';

interface Props
  extends BaseComponentProps,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    > {
  color: Color;
  textAlign: TextAlign;
  fontWeight: FontWeight;
  fontSize:
    | 'text-xs'
    | 'text-sm'
    | 'text-base'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl'
    | 'text-5xl'
    | 'text-6xl'
    | 'text-7xl'
    | 'text-8xl'
    | 'text-9xl';
  elementTextType: ElementTextType;
}
export interface TypographyProps extends Partial<Props> {
  children: ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  children,
  className = '',
  color,
  fontWeight = 'font-normal',
  fontSize = 'text-sm',
  style,
  textAlign,
  elementTextType = 'span',
  ...props
}) =>
  createElement(
    elementTextType,
    {
      className: `${fontSize} ${fontWeight} ${className}`,
      style: {
        textAlign,
        color,
        ...style,
      },
      ...props,
    },
    children
  );
