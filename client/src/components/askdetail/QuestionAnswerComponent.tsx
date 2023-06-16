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

      <CommentContainer />
    </section>
  );
};

export default QuestionAnswerComponent;
