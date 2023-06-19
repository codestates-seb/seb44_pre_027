import React from 'react';
import QuestionScoreItem, { QuestionItemInterface } from './QuestionScoreItem';

interface QuestionScoreConatinerProps {
  itemArray: QuestionItemInterface[];
  title: string;
}

const QuestionScoreConatiner = ({ itemArray, title }: QuestionScoreConatinerProps) => {
  return (
    <section className="">
      <h2 className=" mb-6 text-xl font-light">{title}</h2>
      <ol className=" list-none">
        {itemArray.map((item, idx) => (
          <QuestionScoreItem key={`qsi${idx}`} voteCount={item.voteCount} subject={item.subject} />
        ))}
      </ol>
    </section>
  );
};

export default QuestionScoreConatiner;

export const questionItemArray: QuestionItemInterface[] = [
  {
    voteCount: 24,
    subject:
      '"options.allowedHosts[0] should be a non-empty string." when adding proxy to package.json in ReactJS [duplicate]',
  },
  {
    voteCount: 5,
    subject: 'How do I downgrade react-scripts 5.0.1 to 4.0.3',
  },
  {
    voteCount: 0,
    subject: 'Proxy does not work in localhost with create-react-app and deno server',
  },
  {
    voteCount: 0,
    subject:
      'Trouble connecting React frontend to backend on different port using proxy in package.json',
  },
  {
    voteCount: 1,
    subject: 'Any fix for the issue caused by `react-scripts 5.0.1`?',
  },
  {
    voteCount: -1,
    subject:
      'Why is my backend proxy (setup using a setupProxy.js file) not proxying to the right port?',
  },
];

export const relatedItemArray: QuestionItemInterface[] = [
  {
    voteCount: 176,
    subject:
      'Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema',
  },
  {
    voteCount: 5,
    subject:
      'Webpack error: Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema',
  },
  {
    voteCount: 0,
    subject:
      'Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema in ReactJS',
  },
  {
    voteCount: 1,
    subject:
      'Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema',
  },
  {
    voteCount: 9,
    subject:
      'webpack options has an unknown property hotOnly. Invalid options object. Dev Server has been initialized using an options object',
  },
  {
    voteCount: 7,
    subject:
      'Invalid configuration object. Webpack has been initialized using a configuration object that does not match the API schema. 2022 problem',
  },
];
