import Wrapper from '@/common/Wrapper';
import QuestionContainer from '@/components/home/QuestionContainer';
import LeftSideBar from '@/components/LeftSideBar';
import React from 'react';

interface QuestionsPageProps {}

const QuestionsPage = ({}: QuestionsPageProps) => {
  return (
    <Wrapper>
      <main className=" flex px-6 py-3">
        <LeftSideBar />
        <QuestionContainer />
      </main>
    </Wrapper>
  );
};

export default QuestionsPage;
