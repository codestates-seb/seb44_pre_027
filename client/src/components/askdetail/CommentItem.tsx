import React from 'react';
import {Board} from '../../types/QuestionAnswerType';
import Link from '../../common/atoms/Link';

interface CommentItemProps {
  data: Board;
  id: number;
}

const CommentItem = ({data, id}: CommentItemProps) => {
  return (
    <li className=" flex list-none border-y border-slate-200 py-2 text-slate-700">
      <span className=" pr-3">{id}</span>
      <div className='flex gap-2 items-center'>
        <span className='text-13'>{data.content}</span>
        <span className='text-13'>–</span>
        <Link text={data.nickname}/>
        <span className=" text-slate-400 float-right text-13">{data.createdAt}</span>
      </div>
    </li>
  );
};

export default CommentItem;
