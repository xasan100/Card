import React from 'react';
import ReactDOM from 'react-dom/client';
import Context from './Context/context.js';
import   Root from "./Root/index.jsx" 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <Root />
    </Context>
  </React.StrictMode>
);

