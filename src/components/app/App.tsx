import React from 'react';
import './App.scss';
import Header from '../header';
import Footer from '../footer';
import Product from '../product';

function App() {
  return (
    <div className="container">
      <Header/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
