import React, { useState } from 'react';
import UseDahamComponent from './components/UseDahamComponent';
import QuestionDetailPage from './pages/question/[id]/QuestionDetailPage';

interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <div className="App">
      <div className=" flex items-center justify-center bg-red-300">it goes Work!!</div>
      <React.Suspense fallback={<div>loading</div>}>
        <UseDahamComponent />
      </React.Suspense>
      <QuestionDetailPage />
    </div>
  );
};

export default App;
