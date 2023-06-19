import React from 'react';
import PagenationBtn from './PagenationBtn';

interface QuestionItemProps {}

const QuestionItem = ({}: QuestionItemProps) => {
  return (
    <li className=" flex border-y border-slate-200 px-8 py-4">
      <div className=" flex flex-shrink-0 flex-col items-end justify-center gap-2 text-sm">
        <span className="">{'3'} votes</span>
        <span className=" rounded-sm border border-slate-300 px-1 text-slate-500">
          {'2'} answers
        </span>
        <span className=" text-slate-400">{'219'} views</span>
        <span className=" rounded-sm bg-blue-500 px-2 py-1 text-white">+100</span>
      </div>
      <div className=" flex flex-col px-5">
        <h3 className=" cursor-pointer text-sky-500">
          {'Lost order between file save and file quit'}
        </h3>
        <p className=" break-words pt-3 text-xs text-slate-500">
          I want to save a file, on top of my old file after python running vba script but problem
          that i every time need press save to overwrite my old file what i can do with this code to
          make press
        </p>

        <div className=" flex items-center justify-between">
          <ol className=" flex items-center  gap-3 pt-2 text-xs">
            <li className=" cursor-pointer rounded-sm bg-sky-100 px-2 py-1 text-sky-700 hover:bg-blue-200">
              python
            </li>
            <li className=" cursor-pointer rounded-sm bg-sky-100 px-2 py-1 text-sky-700 hover:bg-blue-200">
              vba
            </li>
            <li className=" cursor-pointer rounded-sm bg-sky-100 px-2 py-1 text-sky-700 hover:bg-blue-200">
              visual-studio
            </li>
          </ol>
          <div className=" flex gap-2 text-xs text-slate-400">
            <span className=" text-sky-500">{'HelloCw'}</span>
            <span>
              {'1051'} asked {'Jun 6 at 11:07'}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default QuestionItem;
