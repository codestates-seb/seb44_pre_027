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

interface QuestionDetailPageProps {}

const QuestionDetailPage = ({}: QuestionDetailPageProps) => {
  return (
    <main>
      <DetailTitle />
      <div className="flex">
        <QuestionAnswerComponent />
        <div className=" mt-4 flex flex-col">
          <LabelContainer className=" mb-4" />
          <QuestionScoreConatiner title="Linked" itemArray={questionItemArray} />
          <QuestionScoreConatiner title="Related" itemArray={relatedItemArray} />
        </div>
      </div>
    </main>
  );
};

export default QuestionDetailPage;
