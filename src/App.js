import React from 'react';
import './App.css';
import TokenSearch from './components/TokenSearch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DEX Screener Token Search</h1>
        <TokenSearch />
      </header>
    </div>
  );
}

export default App;
