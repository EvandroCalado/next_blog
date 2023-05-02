import React from 'react';
import * as Styled from './styles';

export type ButtonProps = {
  children: string;
  color: 'primary' | 'secondary';
  icon?: React.ReactNode;
  disasbled?: boolean;
};

const Button = ({
  children,
  color = 'primary',
  icon,
  disasbled = false,
}: ButtonProps) => {
  return (
    <Styled.Button disabled={disasbled} color={color}>
      {children}
      {icon && icon}
    </Styled.Button>
  );
};

export default Button;
