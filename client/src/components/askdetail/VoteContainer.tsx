import BookmarkIcon from '@/assets/icons/BookmarkIcon';
import FallbackIcon from '@/assets/icons/FallbackIcon';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from '@tanstack/react-query';
import React from 'react';
import VoteButton from './VoteButton';

interface VoteContainerProps {
  voteScore?:number;
  postId?:number;
  refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>;
}

const VoteContainer = ({voteScore, postId, refetch}: VoteContainerProps) => {

  return (
    <div className=" px-4">
      <div className=" flex max-w-[57px] flex-col items-center justify-center">
        <VoteButton direction="up" postId={postId} refetch={refetch}/>
        <p className=" py-3">{voteScore}</p>
        <VoteButton direction="down" postId={postId} refetch={refetch}/>
        <div className=" mt-2 rounded-sm px-3 py-1 hover:ring-2 hover:ring-slate-400">
          <BookmarkIcon />
        </div>
        <div className=" mt-1 px-3 py-1">
          <FallbackIcon />
        </div>
      </div>
    </div>
  );
};

export default VoteContainer;
