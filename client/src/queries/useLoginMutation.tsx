import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { setLogin } from '@/modules/loginSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getHeader, isSuccessStatus } from '@/utils';

const url = '';

const postLogin = async (loginData: any) => {
  const response = await fetch(`${url}/users/login`, {
    method: 'POST',
    body: JSON.stringify(loginData),
    credentials: 'include',
    headers: {
      Origin: 'http://localhost:5173',
      'Access-Control-Request-Method': 'POST',
    },
  });
  const header = getHeader(response, 'authorization');
  const status = isSuccessStatus(response);
  const result = await response.json();
  return {
    header: header,
    body: result,
    status: status,
  };
};

const useLoginMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginMutation = useMutation({
    mutationFn: (loginData: any) => postLogin(loginData),
    onSuccess(data, variables, context) {
      if (!data.status) return;
      dispatch(
        setLogin({
          accesstoken: data.header,
          refreshtoken: '',
        })
      );
      navigate('/');
    },
  });
  return loginMutation;
};

export default useLoginMutation;
