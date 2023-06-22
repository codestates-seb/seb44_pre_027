import React from 'react';
import { styled } from 'styled-components';
import {Comment} from '../../types/QuestionAnswerType';
import Link from '../../common/atoms/Link';
import XIcon from '@/assets/icons/XIcon';
import { call } from '@/utils/ApiService';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useMutation } from '@tanstack/react-query';
import { comments } from '@/mocks/data';

interface CommentItemProps {
  data: Comment;
  id: number;
  questionId: number;
  commentId: number;
  refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>;
}

const IconWrapper = styled.div`
  & svg {
        fill: #858585;
        background-color: transparent;
        stroke: #858585;
        stroke-width:1.25px;
        cursor: pointer;
    }

    & svg:hover {
        stroke: #b0b0b0;
    }
`;

const CommentItem = ({data, id, questionId, commentId, refetch}: CommentItemProps) => {
  const createdAt = new Date(data.createdAt.substr(0,10)).toDateString();

  const deleteComment = ()=>{
    return call(`/questions/${questionId}/comments/${commentId}`, 'DELETE', null);
  }

  const { mutate } = useMutation(deleteComment,{
    onSettled: () => {
      refetch();
    }
  });

  return (
    <li className=" flex list-none border-y border-slate-200 py-2 text-slate-700">
      <span className=" pr-3">{id}</span>
      <div className='flex gap-2 items-center'>
        <span className='text-13'>{data.content}</span>
        <span className='text-13'>–</span>
        <Link text={data.nickname}/>
        <span className=" text-slate-400 float-right text-13">{createdAt}</span>
        <IconWrapper onClick={()=>mutate()}>
          <XIcon/>
        </IconWrapper>
      </div>
    </li>
  );
};

export default CommentItem;
