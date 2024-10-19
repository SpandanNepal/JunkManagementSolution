// src/App.tsx
import React from 'react';
import './App.css';
import './index.css';
import './output.css';
import CustomerHomepage from './pages/CustomerHomepage';

const App: React.FC = () => {
  return (
    <div>
      <CustomerHomepage/>
    </div>
  );
}

export default App;