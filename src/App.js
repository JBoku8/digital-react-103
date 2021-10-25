import React from 'react';
import { Header, Footer } from './components/layout';
import { Routes } from './Routes';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
