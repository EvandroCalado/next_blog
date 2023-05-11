import React from 'react';
import * as Styled from './styles';

export type ButtonProps = {
  children: React.ReactNode;
  color: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  disasbled?: boolean;
};

const Button = ({
  children,
  color,
  size,
  icon,
  disasbled = false,
}: ButtonProps) => {
  return (
    <Styled.Button disabled={disasbled} color={color} size={size}>
      {children}
      {icon && icon}
    </Styled.Button>
  );
};

export default Button;
