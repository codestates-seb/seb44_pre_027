import { cn } from '@/utils/cn';
import React, { HTMLAttributes } from 'react';
import {Link} from 'react-router-dom';
// 추후 API 규격 정해지면 qnaData type은 API Data

interface DetailTitleProps extends HTMLAttributes<HTMLDivElement> {
  questionTitleData?: {
    title: string;
    views: number;
    created: string;
    modified: string;
  };
  answerNumber: number;
}

const DetailTitle = ({ className, questionTitleData, answerNumber, ...attribute }: DetailTitleProps) => {
  return (
    <div className={cn('  ' + className)} {...attribute}>
      <div className="flex justify-between">
        <h2 className=" pr-6 text-2xl text-slate-700">
          {questionTitleData?.title}
        </h2>
        <Link to="/questions/ask">
          <button className=" h-[38px] w-[100px] rounded-sm bg-sky-500 text-xs text-white hover:bg-sky-700">
            Ask Question
          </button>
        </Link>
      </div>
      <div className=" flex border-b border-slate-200 pb-4 pt-2 text-xs text-slate-500">
        <span className=" mr-4">Asked {answerNumber}</span>
        <span className=" mr-4">Modified {questionTitleData?.modified}</span>
        <span className=" mr-4">Viewed {questionTitleData?.views}</span>
      </div>
    </div>
  );
};

export default DetailTitle;
