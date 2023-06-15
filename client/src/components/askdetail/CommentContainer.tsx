import React from 'react';
// 추후 API 규격 정해지면 qnaData type은 API Data

interface CommentContainerProps {
  qnaData?: {};
}

const CommentContainer = ({}: CommentContainerProps) => {
  return (
    <section>
      <p>
        {`
    I have been stuck on this error in my project when I add "proxy": "http://localhost:6000" in my package.json.
    This is the error response after yarn start.
    But everything is fine when I remove the "proxy": "http://localhost:6000".
    This is on my package.json:
      `}
      </p>
    </section>
  );
};

export default CommentContainer;
