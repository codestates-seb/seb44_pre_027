import React from 'react';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="mx-auto w-[1100px]">{children}</div>;
};

export default Wrapper;
