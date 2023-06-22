import TriangleIcon from '@/assets/icons/TriangleIcon';
import React from 'react';
import { call } from '@/utils/ApiService';
import { useMutation } from '@tanstack/react-query';

interface VoteButtonProps {
  direction: 'up' | 'down';
  postId?: number;
}

const VoteButton = ({ direction, postId }: VoteButtonProps) => {
  const updownVote = () => {
    const status = direction === 'up'? 'good' : 'bad';
    return call(`/questions/${postId}/votes?status=${status}`, 'POST', {
      questionId: postId
    })
  }

  const { mutate } = useMutation(updownVote);

  return (
    <button className=" flex h-[40px] w-[40px] items-center justify-center rounded-full border border-slate-200 hover:bg-orange-100 focus:shadow-[0_0_0_5px_#d9eaf7]"
    onClick={()=>mutate()}>
      <TriangleIcon direction={direction} />
    </button>
  );
};

export default VoteButton;
