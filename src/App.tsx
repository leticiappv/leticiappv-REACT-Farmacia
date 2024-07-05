import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
