import React from 'react';
import CommentItem from './CommentItem';
import { Comment } from '../../types/QuestionAnswerType';

interface CommentContainerProps {
  comments: Array<Comment>;
}

const CommentContainer = ({comments}: CommentContainerProps) => {
  return (
    <section className=" pl-12">
      <ol className=" list-none">
        {comments.map((comment, id)=>{
          return <CommentItem data={comment} id={++id} key={comment.commentId}/>;
        })

        }
      </ol>
      <button className=" mt-3 text-slate-500 hover:text-sky-600">Add a Comment</button>
    </section>
  );
};

export default CommentContainer;
