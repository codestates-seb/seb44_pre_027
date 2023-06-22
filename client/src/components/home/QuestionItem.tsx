import React, {useState} from 'react';
import PagenationBtn from './PagenationBtn';
import { HomeInquiryType } from '@/mocks/homeinquiry';

interface QuestionItemProps {
  createdAt:string;
  voteScore:number;
  answers:string;
  views:number;
  title:string;
  content:string;
  nickname:string;
}

const QuestionItem = ({data}: QuestionItemProps | any) => {

  const createdAt = new Date(data.createdAt);
  const formattedDate = createdAt.toLocaleString("en-US", {
    month:'short',
    day:'numeric',
    hour:'numeric',
    minute:'numeric',
  })
  return (
    <li className=" flex border-y border-slate-200 px-8 py-4">
      <div className=" flex flex-shrink-0 flex-col items-end justify-center gap-2 text-sm">
        <span className="">{data.voteScore} votes</span>
        <span className=" rounded-sm border border-slate-300 px-1 text-slate-500">
          {data.answers.length} answers
        </span>
        <span className=" text-slate-400">{data.views} views</span>
        <span className=" rounded-sm bg-blue-500 px-2 py-1 text-white">+100</span>
      </div>
      <div className=" flex flex-col px-5 min-w-[600px]">
        <h3 className=" cursor-pointer text-sky-500">
          {data.title}
        </h3>
        <p className=" break-words pt-3 text-xs text-slate-500">
          {data.content}
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
            <span className=" text-sky-500">{data.nickname}</span>
            <span>
              {'1051'} asked {formattedDate}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default QuestionItem;
