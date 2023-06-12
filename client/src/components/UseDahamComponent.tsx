import useDahamQuery, { DahamType } from '@/queries/useDahamQuery';
import React from 'react';

interface UseDahamComponentProps {}

const UseDahamComponent = ({}: UseDahamComponentProps) => {
  const daham = useDahamQuery();

  return (
    <div>
      {daham.data?.map((all) => (
        <div>{all}</div>
      ))}
    </div>
  );
};

export default UseDahamComponent;
