import logo from './logo.svg';
import './App.css';
import Body1 from './body1/body1.js';
import Body2 from './body2/body2.js';
import Footer from './footer/footer.js';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/*
      <div className='App-body'>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This site is a <code>WORK IN PROGRESS</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with React
        </a>
      </div> */}
      <Body1/>
      <Body2/>
      <Footer/>
    </div>
  );
}

export default App;
