import React from 'react';
import CommentContainer from './CommentContainer';
import MainText from './MainText';
import VoteContainer from './VoteContainer';

interface QuestionAnswerComponentProps {}

const QuestionAnswerComponent = ({}: QuestionAnswerComponentProps) => {
  return (
    <section className="">
      <div className=" flex pt-4">
        <VoteContainer />
        <MainText />
      </div>

      {/* 답변 정렬 코드 컴포넌트 분리 or 그대로 */}
      <div className=" flex flex-col pl-16 text-xs">
        <div className=" flex items-center justify-between py-4">
          <span className=" text-sm ">{'2'} Answer</span>
          <div className=" text-sm">
            <label htmlFor="">Sorted by: </label>
            <select name="" id="" className=" w-[300px] rounded-md border border-slate-200 p-2">
              <option value="">Highest score (default)</option>
              <option value="">Trending (recent votes count more)</option>
              <option value="">Date modified (newest first)</option>
              <option value="">Date created (oldest first)</option>
            </select>
          </div>
        </div>

        <CommentContainer />
      </div>
    </section>
  );
};

export default QuestionAnswerComponent;
