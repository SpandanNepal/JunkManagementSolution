// src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './index.css';
import './output.css';
import Navigation from './Navigation';
import CustomerHomepage from './pages/CustomerHomepage';

const App: React.FC = () => {
  return (
    <div>
      <CustomerHomepage/>
    </div>
  );
}

export default App;