import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        Dev Challenge: Asset Tracker
      </header>

      <PairSelection/>

      <Graph/>

      <Table/>
    </div>
  );
}

export default App;
