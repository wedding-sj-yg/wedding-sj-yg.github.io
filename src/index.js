import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Global } from '@emotion/react';
import normalize from './styles/normalize';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Global styles={normalize} />
    <App />
  </React.StrictMode>,
);

reportWebVitals();
