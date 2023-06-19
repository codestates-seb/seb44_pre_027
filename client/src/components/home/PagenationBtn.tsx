import { cn } from '@/utils/cn';

import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';

const ButtonVariants = cva(
  `
  border border-slate-200 py-1 px-2 mx-1 rounded-sm text-xs
  text-slate-600
  `,
  {
    variants: {
      variant: {
        default: 'default hover:bg-slate-300',
        active: ' bg-orange-400 text-white cursor-default',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface PagenationBtnProps
  extends VariantProps<typeof ButtonVariants>,
    ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PagenationBtn = ({ children, className, variant, ...attributes }: PagenationBtnProps) => {
  return (
    <button className={`${cn(ButtonVariants({ variant }))} ${className}`} {...attributes}>
      {children}
    </button>
  );
};

export default PagenationBtn;
