import React from 'react';
import logo from '../assets/images/logo.svg';

function Home() {
  return (
    <div className="text-center">
      <header className="flex min-h-screen flex-col items-center justify-center">
        <img src={logo} className="h-80 animate-bounce" alt="logo" />
        List all users
      </header>
    </div>
  );
}

export default Home;
