import React from 'react';
import { Link } from 'react-router-dom';
import MainText from './MainText';
import VoteContainer from './VoteContainer';
import { Answer, Question } from '../../types/QuestionAnswerType'
import { call } from '@/utils/ApiService';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useMutation } from '@tanstack/react-query';

interface QuestionAnswerComponentProps{
  questionId?: number;
  answerId?: number;
  type: 'Answer' | 'Question';
  data: Answer | Question;
  refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>;
}

const QuestionAnswerComponent = ({type, data, questionId, answerId, refetch}: QuestionAnswerComponentProps) => {

  const deleteData = ()=>{
    if(type === 'Question')
      return call(`/questions/${questionId}`, 'DELETE', null);
    if(type === 'Answer')
      return call(`/questions/${questionId}/answers/${answerId}`, 'DELETE', null);
    return call(`/questions/${questionId}`, 'DELETE', null);
  }

  const { mutate } = useMutation(deleteData);

  return (
    <section className="">
      <div className=" flex pt-4 mb-6">
        <VoteContainer voteScore={data.voteScore} postId={type === 'Question' ? questionId : answerId} refetch={refetch}/>
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
        <button onClick={()=>mutate()}>Delete</button>
      </div>
      {type === 'Answer' && <hr/>}
    </section>
  );
};

export default QuestionAnswerComponent;
