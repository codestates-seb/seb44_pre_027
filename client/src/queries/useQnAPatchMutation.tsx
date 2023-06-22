import { useMutation } from '@tanstack/react-query';

export interface PatchInterface {
  type: 'question' | 'answer';
  id: {
    'question-id': number | string;
    'answer-id'?: number | string;
  };
  body: {
    'question-title': string;
    'qeustion-content': string;
    tags: { 'tag-name': string }[];
  };
}

const url = '';

const urlCreator = (baseurl: string, patchData: PatchInterface) => {
  switch (patchData.type) {
    case 'question':
      return `${baseurl}/questions/${patchData.id['question-id']}`;
    case 'answer':
      return `${baseurl}/questions/${patchData.id['question-id']}/answers/${patchData.id['answer-id']}`;
    default:
      return url;
  }
};

const patchQnA = async (patchData: PatchInterface) => {
  const patchurl = urlCreator(url, patchData);
  const response = await fetch(patchurl, {
    method: 'PATCH',
    body: JSON.stringify(patchData),
    headers: {
      Origin: 'http://localhost:5173',
      'Access-Control-Request-Method': 'PATCH',
    },
  });
  const result = await response;
  return result;
};

const useQnAPatchMutation = () => {
  const questionAnswerPatchMutation = useMutation({
    mutationFn: (patchData: PatchInterface) => patchQnA(patchData),
  });
  return questionAnswerPatchMutation;
};

export default useQnAPatchMutation;
