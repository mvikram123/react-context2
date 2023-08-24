import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CricketerProvider from './context/CricketerProvider';
// import CricketProvider from './Components/context/CricketerProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <CricketerProvider>
     <App />

  </CricketerProvider>
       


);

