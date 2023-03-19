import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';
import Providers from './Providers';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Providers>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Providers>
);
