interface AskInformation {
  type: 'input' | 'textarea';
  subject: string;
  description: string;
}

interface InputInformation extends AskInformation {
  type: 'input';
  placeholder: string;
}

interface TextAreaInformation extends AskInformation {
  type: 'textarea';
}

type AskInformationArray = (InputInformation | TextAreaInformation)[];

export const AskInputInformation: AskInformationArray = [
  {
    type: 'input',
    subject: 'Title',
    description: "Be specific and imagine you're asking a question to another person.",
    placeholder: 'e.g Is there an R function for finding the index of an element in a vector?',
  },
  {
    type: 'textarea',
    subject: 'What are the details of your problem?',
    description:
      'introduce the problem and expand on what you put in the title. Minimum 20 characters.',
  },
  {
    type: 'textarea',
    subject: 'What did you try and what were you expecting?',
    description:
      'Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20 characters.',
  },
  {
    type: 'input',
    subject: 'Tags',
    description:
      'Add up to 5 tags to describe what your question is about. Start typing to see suggestions.',
    placeholder: 'e.g. (reactjs postgresql xml)',
  },
  {
    type: 'input',
    subject: 'Review questions already on Stack Overflow to see if your question is a duplicate.',
    description:
      'Clicking on these questions will open them in a new tab for you to review. Your progress here will be saved so you can come back and continue',
    placeholder: 'Do any of these posts answer your question?',
  },
];
