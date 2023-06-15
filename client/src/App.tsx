import React, { useState } from 'react';
import LeftSideBar from './components/LeftSideBar';
import UseDahamComponent from './components/UseDahamComponent';
import Header from './common/Header';

interface AppProps {}

const App = ({}: AppProps) => {
  return (
    <div className="App">
      <Header/>
      <React.Suspense fallback={<div>loading</div>}>
      </React.Suspense>
      <LeftSideBar />
    </div>
  );
};

export default App;
