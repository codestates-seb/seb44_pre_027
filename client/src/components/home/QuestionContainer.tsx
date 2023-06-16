import React from 'react';
import QuestionItem from './QuestionItem';

interface QuestionContainerProps {}

const QuestionContainer = ({}: QuestionContainerProps) => {
  return (
    <main className=" flex flex-col">
      <h2>{'All Questions'}</h2>

      {Array.from({ length: 10 }).map((e) => (
        <QuestionItem />
      ))}
    </main>
  );
};

export default QuestionContainer;
