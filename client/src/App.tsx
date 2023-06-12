import React, { useState } from 'react';
import UseDahamComponent from './components/UseDahamComponent';

function App() {
  return (
    <div className="App">
      <div className=" flex items-center justify-center bg-red-300">it goes Work!!</div>
      <React.Suspense fallback={<div>loading</div>}>
        <UseDahamComponent />
      </React.Suspense>
    </div>
  );
}

export default App;
