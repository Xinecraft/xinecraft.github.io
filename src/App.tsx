import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://freesvg.org/img/Lavori-in-corso.png" className="App-logo" alt="logo" />
        <div className="flex flex-col mt-5">
        <p className="text-3xl md:text-5xl">
          WORK IN PROGRESS!
        </p>
        <a
          className="App-link p-5"
          href="https://github/xinecraft"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Github
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
