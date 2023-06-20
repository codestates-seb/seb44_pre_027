import { SignupType } from '@/pages/SignupPage';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const url = '';

const getHeader = (response: Response, get: string) => {
  return response.headers.get(get);
};

const postSignup = async (signupData: SignupType) => {
  const response = await fetch(`${url}/users/signup`, {
    method: 'POST',
    body: JSON.stringify(signupData),
  });

  // const header = getHeader(response, 'authorization');
  const result = await response.json();
  return result;
};

const useSignupMutation = () => {
  const navigate = useNavigate();
  const signupMutation = useMutation({
    mutationFn: (newSignupData: SignupType) => postSignup(newSignupData),
    onSuccess(data, variables, context) {
      navigate('/users/login');
    },
    onSettled: () => {},
    onError: () => {},
  });
  return signupMutation;
};

export default useSignupMutation;
