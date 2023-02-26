import React, { useState } from 'react';
import Layout from './components/Layout';
import Login from './pages/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserOperations from './pages/UserOperations';

type Props = {};

const App = (props: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/users' element={<UserOperations />} />
      </Routes>
    </Layout>
  );
};

export default App;
