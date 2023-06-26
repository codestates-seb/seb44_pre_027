export const FACTORY = {
  DAHAM: ['daham'] as const,
};

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? ''
    : 'http://ec2-3-35-27-217.ap-northeast-2.compute.amazonaws.com:8080';
