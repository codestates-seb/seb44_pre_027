import { SignupType } from '@/pages/SignupPage';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const url = 'http://ec2-3-35-27-217.ap-northeast-2.compute.amazonaws.com:8080';

const postSignup = async (signupData: SignupType) => {
  const response = await fetch(`${url}/users/signup`, {
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
