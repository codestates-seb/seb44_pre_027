import React from 'react';

interface CommentItemProps {}

const CommentItem = ({}: CommentItemProps) => {
  return (
    <li>
      <span>1</span>
      <span>If everything is fine if you remove it, why not remove it?</span>
      <span> - Evert Dec 16, 2021 at 6:15</span>
    </li>
  );
};

export default CommentItem;
