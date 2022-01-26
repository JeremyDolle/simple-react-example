import React from 'react';
import logo from '../assets/logo.svg';

function App() {
  return (
    <div className="text-center">
      <header className="flex bg-slate-800 min-h-screen flex-col items-center justify-center text-white">
        <img src={logo} className="h-80 animate-bounce" alt="logo" />
        <h1>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </h1>
        <div className="flex-row shadow-xl bg-amber-500">
          Test Tailwind css
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
