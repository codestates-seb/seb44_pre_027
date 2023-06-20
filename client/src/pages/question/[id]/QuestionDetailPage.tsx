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
import Wrapper from '@/common/Wrapper';

interface QuestionDetailPageProps {}

const QuestionDetailPage = ({}: QuestionDetailPageProps) => {
  return (
    <Wrapper>
    <main className=" px-6 flex flex-row ">
      <LeftSideBar/>
      <div>
        <DetailTitle />
        <div className="flex">
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
