import React from 'react';
import CommentItem from './CommentItem';
// 추후 API 규격 정해지면 qnaData type은 API Data

interface CommentContainerProps {
  qnaData?: {};
}

const CommentContainer = ({}: CommentContainerProps) => {
  return (
    <section className="px-16 py-6 text-xs">
      <CommentItem />
      <button className=" text-slate-500 hover:text-sky-600">Add a Comment</button>
    </section>
  );
};

export default CommentContainer;
