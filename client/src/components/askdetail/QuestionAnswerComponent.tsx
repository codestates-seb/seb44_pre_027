import React from 'react';
import { Link } from 'react-router-dom';
import MainText from './MainText';
import VoteContainer from './VoteContainer';
import { Answer, Question } from '../../types/QuestionAnswerType'
import { call } from '@/utils/ApiService';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters, useMutation } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { RootState } from '@/modules/store';

interface QuestionAnswerComponentProps{
  questionId?: number;
  answerId?: number;
  type: 'Answer' | 'Question';
  data: Answer | Question;
  refetch: <TPageData>(options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined) => Promise<QueryObserverResult<any, unknown>>;
}

const QuestionAnswerComponent = ({type, data, questionId, answerId, refetch}: QuestionAnswerComponentProps) => {
  const nowMemberId = useSelector((state: RootState) => state.login).memberId;

  const deleteData = ()=>{
    if(type === 'Question')
      return call(`/questions/${questionId}`, 'DELETE', null);
    if(type === 'Answer')
      return call(`/questions/${questionId}/answers/${answerId}`, 'DELETE', null);
    return call(`/questions/${questionId}`, 'DELETE', null);
  }

  const { mutate } = useMutation(deleteData,{
    onSuccess: () => {
      if(type === 'Question')
        window.location.href='/';
      },
    onSettled:()=>{
      if(type === 'Answer')
        refetch();
    },
    onError: ()=>{
      if(type === 'Question')
        alert('답변이 등록된 질문은 삭제가 불가능합니다.')
    }
  });

  const gotoEditPage = ()=>{
    if(type === 'Question')
      window.location.href = `/questions/${questionId}/edit`;
    if(type === 'Answer')
      window.location.href = `/answers/${answerId}/edit`;
  }

  return (
    <section className="">
      <div className=" flex pt-4 mb-6">
        <VoteContainer voteScore={data.voteScore} postId={type === 'Question' ? questionId : answerId} refetch={refetch}/>
        <MainText content={data.content}/>
      </div>
      { Number(nowMemberId) === data.memberId &&
        <div className=" flex gap-4 text-sm pl-12 pb-4">
          <Link to={ type === 'Question' ?
            `/posts/${questionId}/edit`
            :
            `/questions/${questionId}/answers/${answerId}`
            }>
            <button onClick={gotoEditPage}>Edit</button>
          </Link>
          <button onClick={()=>mutate()}>Delete</button>
        </div>
      }
      {type === 'Answer' && <hr/>}
    </section>
  );
};

export default QuestionAnswerComponent;
