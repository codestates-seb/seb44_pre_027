import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import React, { forwardRef, HTMLAttributes } from 'react';

const AskTextAreaVariants = cva(
  `
  w-[80vw] max-w-[800px] rounded-md min-h-[243px]
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

interface AskTextAreaProps
  extends HTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof AskTextAreaVariants> {
      value: {value:string, onChange: React.ChangeEventHandler<HTMLTextAreaElement>}
    }

const AskTextArea = forwardRef<HTMLTextAreaElement, AskTextAreaProps>(
  ({ className, variant, value, ...attribute }: AskTextAreaProps) => {
    return (
      <textarea className={cn(AskTextAreaVariants({ variant }) + ' ' + className)} {...attribute} {...value}/>
    );
  }
);

export default AskTextArea;
