import React from 'react';

interface CommentItemProps {}

const CommentItem = ({}: CommentItemProps) => {
  return (
    <li className=" flex list-none border-y border-slate-200 py-2 text-slate-700">
      <span className=" pr-3">1</span>
      <div>
        <span>If everything is fine if you remove it, why not remove it?</span>
        <span className=" text-slate-400"> - Evert Dec 16, 2021 at 6:15</span>
      </div>
    </li>
  );
};

export default CommentItem;
