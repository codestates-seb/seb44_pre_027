import React from 'react';
import CommentItem from './CommentItem';
import { Board } from '../../types/QuestionAnswerType';

interface CommentContainerProps {
  comments: Array<Board>;
}

const CommentContainer = ({comments}: CommentContainerProps) => {
  return (
    <section className=" ">
      <ol className=" list-none">
        {comments.map((comment, id)=>{
          return <CommentItem data={comment} id={++id} key={comment.id}/>;
        })

        }
      </ol>
      <button className=" mt-3 text-slate-500 hover:text-sky-600">Add a Comment</button>
    </section>
  );
};

export default CommentContainer;
