import TriangleIcon from '@/assets/icons/TriangleIcon';
import React from 'react';

interface VoteButtonProps {
  direction: 'up' | 'down';
}

const VoteButton = ({ direction }: VoteButtonProps) => {
  return (
    <button className=" flex h-[40px] w-[40px] items-center justify-center rounded-full border border-slate-200 hover:bg-orange-100 focus:shadow-[0_0_0_5px_#d9eaf7]">
      <TriangleIcon direction={direction} />
    </button>
  );
};

export default VoteButton;
