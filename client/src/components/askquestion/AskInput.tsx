import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import React, { forwardRef, HTMLAttributes } from 'react';

const AskInputVariants = cva(
  `
  w-[80vw] max-w-[800px] rounded-md 
  border border-slate-300 px-3 py-2 text-xs
  `,
  {
    variants: {
      variant: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface AskInputProps
  extends HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof AskInputVariants> {
  type?: string;
}

const AskInput = forwardRef<HTMLInputElement, AskInputProps>(
  ({ className, variant, type, ...attribute }: AskInputProps) => {
    return (
      <input
        className={cn(AskInputVariants({ variant }) + ' ' + className)}
        {...attribute}
        type={type}
      />
    );
  }
);

export default AskInput;
