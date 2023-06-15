import SmallPencilIcon from '@/assets/icons/SmallPencilIcon';
import React from 'react';

interface LabelItemProps {
  subject: string;
  listDescription: string[];
}

export const LabelItemArray: LabelItemProps[] = [
  {
    subject: 'The Overflow Blog',
    listDescription: [
      '2023 Developer Survey results are in: the latest trends in technology and...',
      "Hype or not? AI's benefits for developers explored in the 2023 Developer Survey",
    ],
  },
  {
    subject: 'Featured on Meta',
    listDescription: [
      'Statement from SO: June 5, 2023 Moderator Action',
      'Planned maintenance scheduled for Thursday, June 15, 2023 at 21:00 UTC',
      'Does the policy change for AI-generated content affect users who (want to)...',
      'Temporary policy: ChatGPT is banned',
    ],
  },
  {
    subject: 'Hot Meta Posts',
    listDescription: [
      'Error in 2023 Developer Survey analysis?',
      'should the recognized member flair on answers stay when someone leaves a...',
    ],
  },
];

const LabelItem = ({ subject, listDescription }: LabelItemProps) => {
  return (
    <div className=" flex w-[300px] max-w-[300px] flex-col justify-center border border-slate-300 bg-slate-200">
      <h2 className=" h-[41px] bg-slate-200 pl-4 pt-2 text-sm font-semibold">{subject}</h2>
      <ul className=" border-t border-slate-300 bg-slate-100 px-4">
        {listDescription.map((list, idx) => (
          <li key={`list ${idx}`} className="my-1 flex">
            <div className=" pt-[6px]">
              <SmallPencilIcon className=" mx-2 h-[14px] w-[14px] flex-shrink-0" />
            </div>
            <span className=" cursor-pointer py-2 text-xs">{list}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabelItem;
