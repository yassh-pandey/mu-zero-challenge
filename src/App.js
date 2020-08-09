import React from 'react';
import './App.css';
import LeftPane from './components/LeftPane'
import RightPane from './components/RightPane'

function App() {
  return (
    <div className="App">
      <div className="LeftPaneContainer">
        <LeftPane />
      </div>
      <div className="RightPaneContainer">
        <RightPane />
      </div>
    </div>
  );
}

export default App;
