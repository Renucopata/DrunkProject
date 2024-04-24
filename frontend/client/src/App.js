import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoginPage from './pages/LoginPage';
import DashboardPage from'./pages/DashboardPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // You would have your login logic here, such as making API calls to authenticate the user
    // For the sake of this example, I'm just setting isLoggedIn to true when the user logs in
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <DashboardPage />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;