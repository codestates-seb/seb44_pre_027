import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { setLogin } from '@/modules/loginSlice';
import { LoginType } from '@/pages/LoginPage';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from './factory';
import { getHeader, isSuccessStatus } from '@/utils';

const postLogin = async (loginData: LoginType) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(loginData),
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  const ACCESS_TOKEN = response.headers.get('Authorization');
  const REFRESH_TOKEN = response.headers.get('Refresh');
  const status = isSuccessStatus(response);
  const result = await response.json();
  return {
    accesstoken: ACCESS_TOKEN,
    refreshtoken: REFRESH_TOKEN,
    memberId: result.memberId,
    body: result,
    status: status,
  };
};

const useLoginMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginMutation = useMutation({
    mutationFn: (loginData: LoginType) => postLogin(loginData),
    onSuccess(data, variables, context) {
      if (!data.status) return;
      dispatch(
        setLogin({
          accesstoken: data.accesstoken,
          refreshtoken: data.refreshtoken,
          memberId: data.memberId,
        })
      );
      navigate('/');
    },
  });
  return loginMutation;
};

export default useLoginMutation;
