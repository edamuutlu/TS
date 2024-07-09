import React, { useState } from 'react';
import './App.css';
import ToDoWrapper from './components/ToDoWrapper';

const App : React.FC = () => { /* React.FC, fractional component */

  return (
    <div className='App'>
      <ToDoWrapper/>
    </div>
  );
}

export default App;
