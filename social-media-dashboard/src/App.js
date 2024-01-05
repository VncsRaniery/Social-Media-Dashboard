import React from 'react';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div>
      <h1>Social Media Dashboard</h1>
      <div className="dashboard">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default App;
