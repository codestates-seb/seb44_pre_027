import React, { useCallback, useState } from 'react';
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { AskInputInformation } from './askInputInformation';
import AskInput from '@/components/askquestion/AskInput';
import AskTextArea from '@/components/askquestion/AskTextArea';
import GoodQuestion from '@/components/askquestion/GoodQuestion';
import WriteInputContainer from '@/components/askquestion/WriteInputContainer';
import { Container } from '@/common/style/Containers.styled';
import { PrimaryBtn } from '@/common/style/Buttons.styled';
import { call } from '@/utils/ApiService';
import { useSelector } from 'react-redux';
import { RootState } from '@/modules/store';

interface AskQuestionPageProps {}

const AskQuestionPage = ({}: AskQuestionPageProps) => {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();
  const isUser = useSelector((state: RootState) => state.login);

  const addNewQuestion = (data:FieldValues) => {
    return call('/questions', 'POST', {
      memberId:isUser.memberId,
      title: data.title,
      content: data.problem + `\n\n` + data.expected,
    });
  }

  const mutation = useMutation(addNewQuestion);

  const onSubmit: SubmitHandler<FieldValues> = useCallback(
    (data:FieldValues) => {
      mutation.mutate(data, {
        onSettled:(data) => {
          window.location.href=`/questions/${data.questionId}`;
        }
      });
  },
  [mutation]
  )

  return (
    <Container color="#f8f9f9">
      <main className=" mx-4 mb-4 flex max-w-[878px] flex-col">
        <h2 className=" mb-12 mt-6 text-3xl font-semibold">Ask a public question</h2>
        <GoodQuestion />
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register(input)}/>
                  </WriteInputContainer>
                );
              case 'textarea':
                return (
                  <WriteInputContainer
                    key={`input${idx}`}
                    subject={subject}
                    description={description}
                  >
                    <AskTextArea {...register(input)}/>
                  </WriteInputContainer>
                );}
          })}
          <PrimaryBtn size="fit-content"
          className='mt-3 mb-14'
          disabled={isSubmitting}>Post your question</PrimaryBtn>
        </form>
      </main>
    </Container>
  );
};

export default AskQuestionPage;
