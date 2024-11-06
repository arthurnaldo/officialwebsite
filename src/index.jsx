import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: Add a global CSS file if you want
import App from './App'; // This is your main App component
import reportWebVitals from './reportWebVitals'; // Optional: for performance monitoring

// Rendering the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// For performance measurement (optional)
reportWebVitals();
