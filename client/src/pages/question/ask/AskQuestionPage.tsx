import React from 'react';
import useInput from '../../../utils/DaHamHooks/useInput';

import { AskInputInformation } from './askInputInformation';
import AskInput from '@/components/askquestion/AskInput';
import AskTextArea from '@/components/askquestion/AskTextArea';
import GoodQuestion from '@/components/askquestion/GoodQuestion';
import WriteInputContainer from '@/components/askquestion/WriteInputContainer';
import { Container } from '@/common/style/Containers.styled';
import { PrimaryBtn } from '@/common/style/Buttons.styled';
import { call } from '@/utils/ApiService';
import Wrapper from '@/common/Wrapper';

interface AskQuestionPageProps {}

const AskQuestionPage = ({}: AskQuestionPageProps) => {
  const titleBind = useInput();
  const problemBodyBind = useInput();
  const expectedBodyBind = useInput();
  const tagBind = useInput();

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    const data = {
      "title": titleBind.value,
      "body": problemBodyBind.value + `\n\n` + expectedBodyBind.value,
      "tag": tagBind.value,
    }
    call('/questions', 'POST', data);
    // window.location.href=`/questions/${id}`
  }

  return (
    <Container color="#f8f9f9">
      <main className=" mx-4 mb-4 flex max-w-[878px] flex-col">
        <h2 className=" mb-12 mt-6 text-3xl font-semibold">Ask a public question</h2>
        <GoodQuestion />
        <form onSubmit={handleSubmit}>
          {AskInputInformation.map((element, idx) => {
            const { type, input, subject, description } = element;
            switch (type) {
              case 'input':
                return (
                  <WriteInputContainer key={`input${idx}`}
                    subject={subject}
                    description={description}
                  >
                    <AskInput placeholder={element.placeholder}
                    />
                  </WriteInputContainer>
                );
              case 'textarea':
                return (
                  <WriteInputContainer
                    key={`input${idx}`}
                    subject={subject}
                    description={description}
                  >
                    <AskTextArea/>
                  </WriteInputContainer>
                );}
          })}
          <PrimaryBtn size="fit-content"
          className='mt-3 mb-14'>Post your question</PrimaryBtn>
        </form>
      </main>
    </Container>
  );
};

export default AskQuestionPage;
