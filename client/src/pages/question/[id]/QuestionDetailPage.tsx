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

interface QuestionDetailPageProps {
  id: number;
}

const QuestionDetailPage = ({id}: QuestionDetailPageProps) => {
  const [title, setTitle] = useState<string>('');

  {/* GET 으로 질문 정보 받아오기 */}
  useEffect(()=>{
    call(`/questions/${id}`, 'GET', null).then((res) => {setTitle(res.title)});
  },[])

  return (
    <Wrapper>
    <main className=" px-6 flex flex-row ">
      <LeftSideBar/>
      <div className='p-6'>
        {/* 질문 id에 따라 제목 다르게 출력 */}
        <DetailTitle title={title}/>
        <div className="flex gap-10">
          {/* 질문 id에 따라 내용 다르게 출력 */}
          <QuestionAnswerComponent />
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
