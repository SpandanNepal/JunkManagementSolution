import React from 'react';
import './App.css';
import CustomerHomepage from './pages/CustomerHomepage';
import './index.css';
import './output.css';
import Login from './pages/login';
import VendorSearchResults from './pages/VendorSearchResults';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <VendorSearchResults />
      </header>
    </div>
  );
}

export default App;