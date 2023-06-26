import React, { useState, useCallback } from 'react';
import CommentItem from './CommentItem';
import { Comment } from '../../types/QuestionAnswerType';
import Link from '@/common/atoms/Link';
import { PrimaryBtn } from '@/common/style/Buttons.styled';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { call } from '@/utils/ApiService';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useMutation } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '@/modules/store';

interface CommentContainerProps {
  questionId: number;
  comments: Array<Comment>;
  refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>;
}

const CommentContainer = ({comments, questionId, refetch}: CommentContainerProps) => {
  const [showMoreComments, setShowMoreComments] = useState<boolean>(false);
  const [addComment, setAddComment] = useState<boolean>(false);
  const { register, handleSubmit, setValue } = useForm();
  const isUser = useSelector((state: RootState) => state.login);

  const addNewComment = (data:FieldValues) => {
    return call(`/questions/${questionId}/comments`, 'POST', {
      ...data,
      memberId: 4
    });
  };

  const mutation = useMutation(addNewComment);

  const onSubmitComment: SubmitHandler<FieldValues> = useCallback(
    (data:FieldValues) => {
      if(isUser.isLogin){
        mutation.mutate(data, {
          onSettled: () => {
            refetch();
            setValue('comment', '');
          }
        });
      }
      else {
        alert('회원만 댓글 작성이 가능합니다.');
        setValue('comment', '');
      }
  },
  [mutation]
  )

  return (
    <section className=" pl-12">
      <ol className=" list-none">
        {comments.map((comment, id)=>{
          if(id < 5)
            return <CommentItem data={comment} id={++id} key={comment.commentId} refetch={refetch} questionId={questionId} commentId={comment.commentId}/>;
          })
        }
        { (comments.length > 5) && !showMoreComments &&
          <Link text={`Show ${comments.length-5} more comments`}
          onClick={()=>setShowMoreComments(!showMoreComments)}/>
        }
        { showMoreComments &&
          comments.map((comment, id)=>{
            if(id>4)
            return <CommentItem data={comment} id={++id} key={comment.commentId} refetch={refetch} questionId={questionId} commentId={comment.commentId}/>;
          })
        }
      </ol>
      <div className='flex flex-col gap-2'>
        { (comments.length < 5 || showMoreComments) &&
          <Link text={addComment? `Close a Comment` : `Add a Comment`}
          onClick={()=>setAddComment(!addComment)}/>
        }
        { addComment &&
          <form className='flex flex-row gap-3'
          onSubmit={handleSubmit(onSubmitComment)
          }>
            <textarea className='basis-5/6 border border-slate-300'
            {...register('content')}/>
            <PrimaryBtn size='fit-content basis-1/6'>Add</PrimaryBtn>
          </form>
        }
      </div>
      </section>
  );
};

export default CommentContainer;
