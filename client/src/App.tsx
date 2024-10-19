import React from 'react';
import './App.css';
// import CustomerHomepage from './pages/CustomerHomepage';
import Login from './pages/login';
import './index.css';
import './output.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;