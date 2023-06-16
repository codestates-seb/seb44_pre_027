import React, { useState } from 'react';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './common/RightSideBar/RightSideBar';

import UseDahamComponent from './components/UseDahamComponent';

interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <div className="App">
      <div className=" flex items-center justify-center bg-red-300">it goes Work!!</div>
      <React.Suspense fallback={<div>loading</div>}>
        <UseDahamComponent />
      </React.Suspense>
      <LeftSideBar />
      <RightSideBar size={298}/>
    </div>
  );
};

export default App;
