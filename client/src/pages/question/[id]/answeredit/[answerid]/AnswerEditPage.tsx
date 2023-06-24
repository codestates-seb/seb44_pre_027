import useQnAPatchMutation, { PatchInterface } from '@/queries/useQnAPatchMutation';
import { useParams, useNavigate } from 'react-router-dom';
import React, { useRef } from 'react';
import Wrapper from '@/common/Wrapper';

interface AnswerEditPageProps {}

const EditDatas = {
  editdescription: [
    'Your edit will be placed in a queue until it is peer reviewed.',
    'We welcome edits that make the post easier to understand and more valuable for readers. Because community members review edits, please try to make the post substantially better than how you found it, for example, by fixing grammar or adding additional resources and hyperlinks.',
  ],
  howtoeditlist: [
    'Correct minor typos or mistakes',
    'Clarify meaning without changing it',
    'Add related resources or links',
    "Always respect the authors'intent",
    "Don't use edits to reply to the author",
  ],
};

const AnswerEditPage = ({}: AnswerEditPageProps) => {
  const answerMutation = useQnAPatchMutation();
  const { questionid, answerid } = useParams();
  const navigate = useNavigate();
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const saveEditHandler = () => {
    const answerObj: PatchInterface = {
      type: 'answer',
      id: {
        'question-id': questionid,
        'answer-id': answerid,
      },
      body: {
        'qeustion-content': bodyRef.current.value,
      },
    };
    answerMutation.mutate(answerObj);
    navigate(`/questions/${questionid}`);
  };

  return (
    <Wrapper>
      <main className="m-5 flex flex-row">
        <div className="flex flex-col">
          <div className="flex max-w-[661px] flex-col gap-3 border border-amber-200 bg-amber-100 bg-opacity-50 px-6 pb-6 pt-4 text-sm font-light">
            {EditDatas.editdescription.map((description) => (
              <span key={description}>{description}</span>
            ))}
          </div>

          <div className="mb-2">
            <div className=" mb-3 mt-4 rounded-sm ">Body</div>
            <textarea
              className=" min-h-[243px] w-full overflow-visible rounded-md
                                    border border-slate-300 px-3 py-2 text-xs"
              ref={bodyRef}
              required
            ></textarea>
          </div>

          <div className="my-4 mb-3 text-sm ">
            <button
              className="rounded border border-zinc-200 bg-blue-500 px-3 
                        py-2 font-normal text-white hover:bg-blue-800"
              onClick={saveEditHandler}
            >
              Save edits
            </button>
            <button
              className="mx-2 bg-white px-3 py-2 font-normal 
                            text-sky-500 hover:rounded hover:bg-sky-50"
            >
              Cancel
            </button>
          </div>
        </div>

        <div className="ml-5 flex max-h-[223px] min-w-[352px] flex-col  border border-orange-100 bg-amber-100 bg-opacity-50 text-sm md:block md:w-auto">
          <div className="border-b border-orange-100 bg-amber-100 py-2 pl-5 font-normal">
            How to Edit
          </div>
          <ul className="list-disc py-2 pl-8 text-xs">
            {EditDatas.howtoeditlist.map((edit) => (
              <li className=" py-2 pl-2" key={edit}>
                {edit}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Wrapper>
  );
};

export default AnswerEditPage;
