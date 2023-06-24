import { useMutation } from '@tanstack/react-query';

export interface PatchInterface {
  type: 'question' | 'answer';
  id: {
    'question-id': number | string;
    'answer-id'?: number | string;
  };
  body: {
    'question-title'?: string;
    'qeustion-content': string;
    tags?: { 'tag-name': string }[];
  };
}

const url = 'http://ec2-3-35-27-217.ap-northeast-2.compute.amazonaws.com:8080';

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
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  const result = await response;
  console.log(result);
  return result;
};

const useQnAPatchMutation = () => {
  const questionAnswerPatchMutation = useMutation({
    mutationFn: (patchData: PatchInterface) => patchQnA(patchData),
  });
  return questionAnswerPatchMutation;
};

export default useQnAPatchMutation;
