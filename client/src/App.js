import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

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
