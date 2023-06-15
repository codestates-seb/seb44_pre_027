import React from 'react';
import CommentContainer from './CommentContainer';
import VoteContainer from './VoteContainer';

interface QuestionAnswerComponentProps {}

const QuestionAnswerComponent = ({}: QuestionAnswerComponentProps) => {
  return (
    <section className=" flex pt-4">
      <VoteContainer />
      <CommentContainer />
    </section>
  );
};

export default QuestionAnswerComponent;
