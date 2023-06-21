import { AskInputInformation } from './askInputInformation';
import AskInput from '@/components/askquestion/AskInput';
import AskTextArea from '@/components/askquestion/AskTextArea';
import GoodQuestion from '@/components/askquestion/GoodQuestion';
import WriteInputContainer from '@/components/askquestion/WriteInputContainer';
import { Container } from '@/common/style/Containers.styled';

interface AskQuestionPageProps {}

const AskQuestionPage = ({}: AskQuestionPageProps) => {
  return (
    <Container color="#f8f9f9">
      <main className=" mx-4 mb-4 flex max-w-[878px] flex-col">
        <h2 className=" mb-12 mt-6 text-3xl font-semibold">Ask a public question</h2>
        <GoodQuestion />
        <form action="">
          {AskInputInformation.map((element, idx) => {
            const { type, subject, description } = element;
            switch (type) {
              case 'input':
                return (
                  <WriteInputContainer
                    key={`input${idx}`}
                    subject={subject}
                    description={description}
                  >
                    <AskInput placeholder={element.placeholder} />
                  </WriteInputContainer>
                );
              case 'textarea':
                return (
                  <WriteInputContainer
                    key={`input${idx}`}
                    subject={subject}
                    description={description}
                  >
                    <AskTextArea />
                  </WriteInputContainer>
                );
            }
          })}
        </form>
      </main>
    </Container>
  );
};

export default AskQuestionPage;
