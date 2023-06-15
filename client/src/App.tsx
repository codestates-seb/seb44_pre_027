import React, { useState } from 'react';
import LeftSideBar from './components/LeftSideBar';
import UseDahamComponent from './components/UseDahamComponent';
import AskQuestionPage from './pages/question/ask/AskQuestionPage';

interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <div className="App">
      <div className=" flex items-center justify-center bg-red-300">it goes Work!!</div>
      <React.Suspense fallback={<div>loading</div>}>
        <UseDahamComponent />
      </React.Suspense>
      <AskQuestionPage />
    </div>
  );
};

export default App;
