import React from 'react';
import './App.css';
import Services from './Services.js';

function App() {
  return (
    <div className="App">
      <Services offer1='Hair cutting' />

     
      <hr/>
      <Services offer2='shaving' />

     
      <hr/>
      <Services offer3='Facial' />

    </div>
  );
}

export default App;
