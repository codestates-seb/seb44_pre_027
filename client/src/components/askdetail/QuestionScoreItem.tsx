import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import React, { HTMLAttributes } from 'react';

const QuestionButtonVariants = cva(
  `
      h-[24px] w-[38px] text-sm
  `,
  {
    variants: {
      variant: {
        default: 'bg-slate-200',
        active: ' bg-green-500 text-white',
      },
    },
    defaultVariants: {
      variant: 'active',
    },
  }
);

export interface QuestionItemInterface {
  voteCount: number;
  subject: string;
  href?: string;
}

interface QuestionScoreItemProps
  extends VariantProps<typeof QuestionButtonVariants>,
    QuestionItemInterface {}

const QuestionScoreItem = ({
  variant,
  voteCount,
  subject,
  href,
  ...attributes
}: QuestionScoreItemProps) => {
  return (
    <li className={`my-3 flex list-none `}>
      <div className="">
        <button className={cn(QuestionButtonVariants({ variant }))}>{voteCount}</button>
      </div>
      <span className="  max-w-[250px] break-words pl-3 text-xs">
        <a href="" className=" text-blue-500">
          {subject}
        </a>
      </span>
    </li>
  );
};

export default QuestionScoreItem;
