import React from 'react';

interface MainTextProps {}

const MainText = ({}: MainTextProps) => {
  return (
    <div className=" flex flex-col justify-between">
      <p>
        I'm having the issue that's faced in this question: Invalid options object. Dev Server has
        been initialized using an options object that does not match the API schema One of the
        solutions is to downgrade react-scripts to 4.0.3 and I'm not sure how to do that. Could
        someone help me?
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
