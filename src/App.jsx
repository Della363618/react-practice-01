import React from 'react';
import Examples from './components/Examples.jsx';

import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';



function App() {


  return (
    <div>
      <Header></Header>
      <main>
        <CoreConcepts />
        <Examples />


      </main>
    </div>
  );
}

export default App;
