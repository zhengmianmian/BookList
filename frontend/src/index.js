import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { AuthContextProvider } from './components/Auth';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);

