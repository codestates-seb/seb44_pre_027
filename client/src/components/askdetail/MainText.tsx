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

      {/* button 컴포넌트 분리할지 안할지 */}
      <div className=" flex gap-4 text-sm">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default MainText;
