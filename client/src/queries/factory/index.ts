export const FACTORY = {
  DAHAM: ['daham'] as const,
};

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? ''
    : 'https://dahamoverflow.store';
