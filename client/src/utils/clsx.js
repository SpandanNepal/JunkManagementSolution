import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const clsxm = (...classes) => {
  return twMerge(clsx(...classes));
};
