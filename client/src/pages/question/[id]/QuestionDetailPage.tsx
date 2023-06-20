import CommentContainer from '@/components/askdetail/CommentContainer';
import DetailTitle from '@/components/askdetail/DetailTitle';
import LabelContainer from '@/components/askdetail/LabelContainer';
import QuestionAnswerComponent from '@/components/askdetail/QuestionAnswerComponent';
import QuestionScoreConatiner, {
  questionItemArray,
  relatedItemArray,
} from '@/components/askdetail/QuestionScoreConatiner';
import VoteContainer from '@/components/askdetail/VoteContainer';
import React from 'react';
import LeftSideBar from '@/components/LeftSideBar';
import RightSideBar from '@/components/RightSideBar';
import Wrapper from '@/common/Wrapper';

interface QuestionDetailPageProps {}

const QuestionDetailPage = ({}: QuestionDetailPageProps) => {
  {/* GET 으로 질문 정보 받아오기 */}
  return (
    <Wrapper>
    <main className=" px-6 flex flex-row ">
      <LeftSideBar/>
      <div className='p-6'>
        {/* 질문 id에 따라 제목 다르게 출력 */}
        <DetailTitle />
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
