import { FACTORY } from './factory';
import { useQuery } from '@tanstack/react-query';

export type DahamType = string[];

export const getDaham = async () => {
  const response = await fetch('/todos');
  return await response.json();
};

const useDahamQuery = () => {
  const daham = useQuery<DahamType>({
    queryKey: FACTORY.DAHAM,
    queryFn: () => getDaham(),
  });
  return daham;
};

export default useDahamQuery;
