import React, { useCallback, useState } from 'react';
import { styled } from 'styled-components';
import {Comment} from '../../types/QuestionAnswerType';
import Link from '../../common/atoms/Link';
import XIcon from '@/assets/icons/XIcon';
import { call } from '@/utils/ApiService';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useMutation } from '@tanstack/react-query';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '@/modules/store';

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
  const [editMode, setEditMode] = useState<boolean>(false);
  const { register, handleSubmit, setValue } = useForm();
  const createdAt = new Date(data.createdAt.substr(0,10)).toDateString();
  const nowMemberId = useSelector((state: RootState) => state.login.memberId);

  const editComment = (data:FieldValues)=>{
    return call(`/questions/${questionId}/comments/${commentId}`, 'PATCH', {
      memberId: nowMemberId,
      content: data.content
    })
  }

  const onEditComment: SubmitHandler<FieldValues> = useCallback(
    (data:FieldValues) => {
      editCom(data, {
        onSettled: ()=>{
          refetch();
          setValue('content', '');
          setEditMode(false);
        },
      });
    },
    []
    )

  const { mutate:editCom } = useMutation(editComment,{
    onSettled: () => {
      refetch();
    }
  });

  const deleteComment = ()=>{
    return call(`/questions/${questionId}/comments/${commentId}`, 'DELETE', null);
  }

  const { mutate:deleteCom } = useMutation(deleteComment,{
    onSettled: () => {
      refetch();
    }
  });

  return (
    <li className=" flex list-none border-y border-slate-200 py-2 text-slate-700 justify-between">
      <div className='flex items-center'>
      <span className=" pr-3">{id}</span>
        { !editMode &&
          <div className='flex gap-2'>
            <span className='text-13'>{data.content}</span>
            <span className='text-13'>–</span>
            <Link text={data.nickname}/>
            <span className=" text-slate-400 float-right text-13">{createdAt}</span>
          </div>
        }
        { editMode &&
          <form className='flex gap-2 w-full' onSubmit={handleSubmit(onEditComment)}>
            <input className='border border-slate-300 rounded-lg' {...register('content')}/>
            <button className='text-13 bg-slate-300 hover:bg-slate-200 p-1.5 rounded-lg'>Save</button>
            <button className='text-13 bg-slate-300 hover:bg-slate-200 p-1.5 rounded-lg' onClick={()=>setEditMode(!editMode)}>Back</button>
          </form>
        }
      </div>
      { !editMode && (Number(nowMemberId) === data.memberId) &&
        <div className='flex gap-2'>
          <span className='text-13 hover:cursor-pointer text-slate-400' onClick={()=>setEditMode(!editMode)}>Edit</span>
          <IconWrapper onClick={()=>deleteCom()}>
            <XIcon/>
          </IconWrapper>
        </div>
      }
    </li>
  );
};

export default CommentItem;
