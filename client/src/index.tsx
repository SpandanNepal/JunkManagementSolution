import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './output.css';
import Footer from './pages/Footer';
import Header from './components/Header';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Header isLoggedIn={true} />
      <App />
      <Footer />
    </React.StrictMode>
  );
}

reportWebVitals();