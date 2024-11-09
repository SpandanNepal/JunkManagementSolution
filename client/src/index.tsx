import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './output.css';
import Footer from './components/Footer';
import { UserProvider } from './UserContext';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
        <UserProvider>
      <App />
      </UserProvider>
      <Footer />
    </React.StrictMode>
  );
}

reportWebVitals();