import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css'; // Global styles
import App from './App';

// If you're planning on using Redux or any context providers, you would wrap them here.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
