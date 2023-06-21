import { useParams } from 'react-router-dom';
import DetailTitle from '@/components/askdetail/DetailTitle';
import QuestionAnswerComponent from '@/components/askdetail/QuestionAnswerComponent';
import CommentContainer from '@/components/askdetail/CommentContainer';
import LabelContainer from '@/components/askdetail/LabelContainer';
import QuestionScoreConatiner, {
  questionItemArray,
  relatedItemArray,
} from '@/components/askdetail/QuestionScoreConatiner';
import LeftSideBar from '@/components/LeftSideBar';
import Wrapper from '@/common/Wrapper';
import { call } from '../../../utils/ApiService';

import { Answer } from '../../../types/QuestionAnswerType';
import { ColumnItemWrapper } from '@/common/style/Containers.styled';
import { useQuery } from '@tanstack/react-query';

interface QuestionDetailPageProps {}

const QuestionDetailPage = ({}: QuestionDetailPageProps) => {
  const { questionId } = useParams();
  let onlyQuestionData = {
    questionId: 0,
    nickname: '',
    title: '',
    content: '',
    views: 0,
    voteScore: 0,
    createdAt: '',
    modifiedAt: ''
  };

  const { data, isSuccess, isLoading } = useQuery(['question'],
  ()=>call(`/questions/${questionId}`, 'GET', null));

  console.log(data)

  if(isSuccess){
    onlyQuestionData = {
      questionId: data.questionId,
      nickname: data.nickname,
      title: data.title,
      content: data.content,
      views: data.views,
      voteScore: data.voteScore,
      createdAt: data.createdAt,
      modifiedAt: data.modifiedAt
    }
  }
  if(isLoading){
    return <h2>Loading...</h2>
  }

  const loadAnswers = ():JSX.Element[] =>{
    const answersArray = data.answers.map((answer: Answer)=>{
      return <QuestionAnswerComponent data={answer} type='Answer' questionId={data.questionId} answerId={answer.answerId} key={answer.answerId}/>
    })
    return answersArray;
  }

  return (
    <Wrapper>
    <main className=" px-6 flex flex-row ">
      <LeftSideBar/>
      <div className='p-6'>
        <DetailTitle
          onlyQuestionData={onlyQuestionData}
          answerNum={data.answers.length}
        />
        <div className="flex gap-10">
            <ColumnItemWrapper size='100%' gap={10}>
              <QuestionAnswerComponent data={onlyQuestionData} type='Question' questionId={data.questionId}/>
              <CommentContainer comments={data.comments} questionId={data.questionId}/>
              <div className=" flex flex-col text-xs">
                <div className=" flex items-center justify-between py-4 gap-12">
                  <span className="text-xl">{data.answers.length} Answer</span>
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
              </div>
              {loadAnswers()}
          </ColumnItemWrapper>
          <div className=" mt-4 flex flex-col">
            <LabelContainer className=" mb-4" />
            <QuestionScoreConatiner title="Linked" itemArray={questionItemArray} />
            <QuestionScoreConatiner title="Related" itemArray={relatedItemArray} />
          </div>
        </div>
      </div>
    </main>
    </Wrapper>
  );
};

export default QuestionDetailPage;
