import { useEffect, useState } from 'react';
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

import { Question, QuestionData } from '../../../types/QuestionAnswerType';
import { ColumnItemWrapper } from '@/common/style/Containers.styled';

interface QuestionDetailPageProps {
  id: number;
}

const BoardInitData = {
  id: 0,
  nickname: '',
  content: '',
  createdAt: '',
  modifiedAt: '',
}

const QuestionInitData = {
  ...BoardInitData,
  title : '',
  views : 0,
  voteScore : 0,
  answers: [{...BoardInitData,}],
  comments: [{...BoardInitData}],
}

const QuestionDetailPage = ({id}: QuestionDetailPageProps) => {
  const [data, setData] = useState<QuestionData>(QuestionInitData);
  const [question, setQuestion] = useState<Question>({...BoardInitData, title:'', views: 0, voteScore:0});

  useEffect(()=>{
    call(`/questions/${id}`, 'GET', null).then((res) => {
      setData(res);
      setQuestion({
        id: res.id,
        nickname: res.nickname,
        title: res.title,
        content: res.content,
        views: res.vies,
        voteScore: res.voteScore,
        createdAt: res.createdAt,
        modifiedAt: res.createdAt,
      });
    });
  },[])

  const loadAnswers = ():JSX.Element[] =>{
    const answersArray = data.answers.map((answer)=>{
      return <QuestionAnswerComponent data={answer} type='Answer' key={answer.id}/>
    })
    return answersArray;
  }

  return (
    <Wrapper>
    <main className=" px-6 flex flex-row ">
      <LeftSideBar/>
      <div className='p-6'>
        <DetailTitle
          questionTitleData={{title:question.title,
            views:question.views,
            created:question.createdAt,
            modified:question.modifiedAt}}
          answerNumber={data.answers.length}
        />
        <div className="flex gap-10">
            <ColumnItemWrapper size='100%' gap={10}>
              <QuestionAnswerComponent data={question} type='Question'/>
              <CommentContainer comments={data.comments}/>
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
