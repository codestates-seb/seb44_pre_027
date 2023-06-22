import { ComponentPropsWithoutRef } from 'react';

interface GoodQuestionProps extends ComponentPropsWithoutRef<'div'> {}

const GoodQuestion = ({ className }: GoodQuestionProps) => {
  return (
    <div className={className}>
      <div className="  max-w-[878px] flex-col rounded-sm border border-blue-300 bg-blue-100 bg-opacity-50 px-6 pb-8 pt-4">
        <h3 className=" mb-2 text-lg font-medium">Writing a good question</h3>
        <p className=" text-sm">
          You’re ready to <a
            className=" text-blue-400 hover:text-blue-600"
            href="https://stackoverflow.com/help/how-to-ask"
          > ask </a> a <a
            className=" text-blue-400 hover:text-blue-600"
            href="https://stackoverflow.com/help/on-topic"
          > programming-related question
          </a> and this form will help guide you through the process
          </p>
        <p className=" text-sm">
          See <a
            className=" text-blue-400 hover:text-blue-600"
            href="https://stackoverflow.com/help/on-topic"
          > the topics here
          </a> to find a relevant site.
        </p>

        <div className="mt-6">
          <h4 className=" mb-2 text-sm font-semibold">Steps</h4>
          <ul className=" ml-4 list-disc px-4 text-xs ">
            <li className="">Summarize your problem in a one-line title.</li>
            <li className="">Describe your problem in more detail.</li>
            <li className="">Describe what you tried and what you expected to happen.</li>
            <li className="">
              Add “tags” which help surface your question to members of the community.
            </li>
            <li className="">Review your question and post it to the site.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GoodQuestion;
