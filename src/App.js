import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header/>
        <About/>
      <Footer/>
    </div>
  );
}

export default App;
