import React from 'react';

interface MainTextProps {
  content: string;
}

const MainText = ({content}: MainTextProps) => {
  return (
    <div className=" flex flex-col justify-between">
      <p>
        {content}
      </p>
    </div>
  );
};

export default MainText;
