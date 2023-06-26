import { SignupType } from '@/pages/SignupPage';
import { BASE_URL } from './factory';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const postSignup = async (signupData: SignupType) => {
  const response = await fetch(`${BASE_URL}/users/signup`, {
    method: 'POST',
    body: JSON.stringify(signupData),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
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
