import './App.css';
import React from 'react'; 
import CustomerHomepage from './pages/CustomerHomepage';

// eslint-disable-next-line react-hooks/rules-of-hooks

// const handleClick = () => {
//     setShowCustomer();
// };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            {<CustomerHomepage />}
        </div>
      </header>
    </div>
  );
}

export default App;
