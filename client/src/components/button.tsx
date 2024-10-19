import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsxm } from '../utils/clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'mainGreen' | 'mainBlue' | 'borderMainBlue';
}

const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'mainGreen', ...rest }) => {
  return (
    <button
      className={clsxm(
        'flex justify-center items-center px-6 py-2 h-12 rounded-md',
        variant === 'mainBlue' ? 'bg-mainBlue text-textWhite' : '',
        variant === 'borderMainBlue' ? 'border-2 border-mainBlue text-mainBlue' : '',
        className 
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
