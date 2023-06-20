import React from 'react';
import MainText from './MainText';
import VoteContainer from './VoteContainer';
import CommentContainer from '@/components/askdetail/CommentContainer';
import { Board, Question } from '../../types/QuestionAnswerType'

interface QuestionAnswerComponentProps {
  type: string;
  data: Board | Question;
}

const QuestionAnswerComponent = ({type, data}: QuestionAnswerComponentProps) => {

  return (
    <section className="">
      <div className=" flex pt-4 mb-6">
        <VoteContainer voteScore={data.voteScore}/>
        <MainText content={data.content}/>
      </div>
      {type === 'Answer' && <hr/>}
    </section>
  );
};

export default QuestionAnswerComponent;
