import React, { useEffect, useState } from 'react';
import CommentItem from './CommentItem';
import { Comment } from '../../types/QuestionAnswerType';
import Link from '@/common/atoms/Link';
import { PrimaryBtn } from '@/common/style/Buttons.styled';
import { FieldValues, useForm } from 'react-hook-form';
import { call } from '@/utils/ApiService';

interface CommentContainerProps {
  questionId: number;
  comments: Array<Comment>;
}

const CommentContainer = ({comments, questionId}: CommentContainerProps) => {
  const [commentList, setCommentList] = useState<Array<Comment>>(comments);
  const [showMoreComments, setShowMoreComments] = useState<boolean>(false);
  const [addComment, setAddComment] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();

  useEffect(()=>{
    call('/comments', 'GET', null).then((res)=>setCommentList(res));
  }, [commentList])

  const addNewComment = async(data:FieldValues) => {
    await call(`/comments`, 'POST', {
      questionId: questionId,
      comment: data,
    });
    setAddComment(false);
  };

  return (
    <section className=" pl-12">
      <ol className=" list-none">
        {comments.map((comment, id)=>{
          if(id < 5)
            return <CommentItem data={comment} id={++id} key={comment.commentId}/>;
          })
        }
        { (comments.length > 5) && !showMoreComments &&
          <Link text={`Show ${comments.length-5} more comments`}
          onClick={()=>setShowMoreComments(!showMoreComments)}/>
        }
        { showMoreComments &&
          comments.map((comment, id)=>{
            if(id>4)
            return <CommentItem data={comment} id={++id} key={comment.commentId}/>;
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
          onSubmit={handleSubmit((data)=>addNewComment(data))
          }>
            <textarea className='basis-5/6'
            {...register('comment')}/>
            <PrimaryBtn size='fit-content basis-1/6'>Add</PrimaryBtn>
          </form>
        }
      </div>
      </section>
  );
};

export default CommentContainer;
