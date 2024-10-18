import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Define the function with appropriate types
export const clsxm = (...classes: (string | undefined)[]): string => {
  return twMerge(clsx(...classes));
};