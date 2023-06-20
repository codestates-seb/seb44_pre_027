import React from 'react';
import { Link } from 'react-router-dom';
import MainText from './MainText';
import VoteContainer from './VoteContainer';
import { Answer, Question } from '../../types/QuestionAnswerType'
import { call } from '@/utils/ApiService';

interface QuestionAnswerComponentProps{
  questionId?: number;
  answerId?: number;
  type: 'Answer' | 'Question';
  data: Answer | Question;
}

const QuestionAnswerComponent = ({type, data, questionId, answerId}: QuestionAnswerComponentProps) => {

  const deleteItem = ()=>{
    if(type === 'Question')
      call(`/questions/${questionId}`, 'DELETE', null);
    if(type === 'Answer')
      call(`/questions/${questionId}/answers/${answerId}`, 'DELETE', null);
  }

  return (
    <section className="">
      <div className=" flex pt-4 mb-6">
        <VoteContainer voteScore={data.voteScore}/>
        <MainText content={data.content}/>
      </div>
      <div className=" flex gap-4 text-sm pl-12 pb-4">
        <Link to={ type === 'Question' ?
          `/posts/${questionId}/edit`
          :
          `/questions/${questionId}/answers/${answerId}`
          }>
          <button>Edit</button>
        </Link>
        <button onClick={deleteItem}>Delete</button>
      </div>
      {type === 'Answer' && <hr/>}
    </section>
  );
};

export default QuestionAnswerComponent;
