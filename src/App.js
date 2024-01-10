import React, { useEffect, useState } from 'react';
import './App.css';
import RoutingComponent from '../src/routes/routes';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {

  return (
    <>
      <Header />
        <RoutingComponent />
      {window.location.pathname !== "/sign-up" && <Footer />}
    </>
  );
}

export default App;
