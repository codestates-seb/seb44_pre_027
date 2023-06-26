import { setLogout } from '@/modules/loginSlice';
import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { BASE_URL } from './factory';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

interface useLogoutMutationProps {}

const getLogout = async () => {
  const response = await fetch(`${BASE_URL}/users/logout`);
  const result = await response.json();
  return result;
};

const useLogoutMutation = ({}: useLogoutMutationProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getLogoutQuery = useMutation({
    mutationFn: getLogout,
    onSuccess: (data) => {
      dispatch(setLogout());
      navigate('/');
    },
  });
  return getLogoutQuery;
};

export default useLogoutMutation;
