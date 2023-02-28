import React, { useState, useContext } from 'react';
import Layout from './components/Layout';
import Login from './pages/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserOperations from './pages/UserOperations';
import Profile from './pages/Profile';
import { UsersContext } from './context/usersContext';

type Props = {};

const App = (props: Props) => {
  const { isAuth } = useContext(UsersContext);

  if (!isAuth) {
    return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to='/login' replace />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/users' element={<UserOperations />} />
        <Route path='/users/:id' element={<Profile />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
