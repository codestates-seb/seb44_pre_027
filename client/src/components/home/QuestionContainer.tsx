import React from 'react';
import Button from '../Button';
import PagenationBtn from './PagenationBtn';
import QuestionItem from './QuestionItem';

interface QuestionContainerProps {}

const QuestionContainer = ({}: QuestionContainerProps) => {
  return (
    <main className=" flex flex-col">
      <div className=" px-4 py-4">
        <div className=" mb-6 flex justify-between">
          <h2 className=" text-2xl">{'All Questions'}</h2>
          <Button>Ask Question</Button>
        </div>

        <div className=" flex items-center justify-between gap-3">
          <p>{'222'} questions with bounties</p>
          <div className=" flex rounded-md border border-slate-300 text-sm text-slate-600">
            <button className=" border-r px-2 py-2">Newest</button>
            <button className=" border-r px-2 py-2">Active</button>
            <button className=" border-r px-2 py-2">Bountied</button>
            <button className=" border-r px-2 py-2">Unanswered</button>
          </div>
        </div>
      </div>

      {Array.from({ length: 10 }).map((e) => (
        <QuestionItem />
      ))}

      <div className=" mx-24 mb-24 mt-12 flex">
        {Array.from({ length: 5 }).map((e, i) => {
          if (i == 0) {
            return <PagenationBtn variant={'active'}>{i + 1}</PagenationBtn>;
          }
          return <PagenationBtn variant={'default'}>{i + 1}</PagenationBtn>;
        })}
      </div>
    </main>
  );
};

export default QuestionContainer;
