import React, { useState, useEffect } from 'react';
import './App.css';
import LoginButton from './components/Auth0/LoginButton';
import LogoutButton from './components/Auth0/LogoutButton';
import Profile from './components/Auth0/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { socket } from './socket';

function App() {

  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div className="App">
        <header className="App-header">
          <LogoutButton />
          <Profile />
        </header>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <LoginButton />
        </header>
      </div>
    );
  }
}

export default App;
