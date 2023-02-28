import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { UsersProvider } from './context/usersContext';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <UsersProvider>
        <App />
      </UsersProvider>
    </Router>
  </React.StrictMode>
);
