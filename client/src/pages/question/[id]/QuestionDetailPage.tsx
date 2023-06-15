import CommentContainer from '@/components/askdetail/CommentContainer';
import DetailTitle from '@/components/askdetail/DetailTitle';
import LabelContainer from '@/components/askdetail/LabelContainer';
import QuestionAnswerComponent from '@/components/askdetail/QuestionAnswerComponent';
import VoteContainer from '@/components/askdetail/VoteContainer';
import React from 'react';

interface QuestionDetailPageProps {}

const QuestionDetailPage = ({}: QuestionDetailPageProps) => {
  return (
    <main>
      <DetailTitle />

      <div className=" flex">
        <QuestionAnswerComponent />
        <LabelContainer />
      </div>
    </main>
  );
};

export default QuestionDetailPage;
