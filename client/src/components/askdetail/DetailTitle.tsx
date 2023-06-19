import { cn } from '@/utils/cn';
import React, { HTMLAttributes } from 'react';
import {Link} from 'react-router-dom';
// 추후 API 규격 정해지면 qnaData type은 API Data

interface DetailTitleProps extends HTMLAttributes<HTMLDivElement> {
  qnaData?: {};
}

const DetailTitle = ({ className, qnaData, ...attribute }: DetailTitleProps) => {
  return (
    <div className={cn('  ' + className)} {...attribute}>
      <div className=" flex justify-between">
        <h2 className=" pr-6 text-2xl text-slate-700">
          {
            'Invalid options object. Dev Server has been initialized using an options object that does not match the API schema'
          }
        </h2>
        <Link to="/questions/ask">
          <button className=" h-[38px] w-[100px] rounded-sm bg-sky-500 text-xs text-white hover:bg-sky-700">
            Ask Question
          </button>
        </Link>
      </div>
      <div className=" flex border-b border-slate-200 pb-4 pt-2 text-xs text-slate-500">
        <span className=" mr-4">Asked {'1 year, 6 months ago'}</span>
        <span className=" mr-4">Modified {'2 days ago'}</span>
        <span className=" mr-4">Viewed {'111k times'}</span>
      </div>
    </div>
  );
};

export default DetailTitle;
