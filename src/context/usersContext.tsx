import React, { createContext, useState } from 'react';
import data from '../data/users';

import type { User } from '../types/User';

export const UsersContext = createContext<any>({});

type Props = {
  children: JSX.Element;
};

export const UsersProvider: React.FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(data);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const deleteUser = (id: number) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  const getUserById = (id: number) => {
    const user = users.find((user) => user.id === id);
    return user;
  };

  const updateUser = (id: number, userr: User) => {
    const newUsers = users.map((user) => {
      if (user.id === id) {
        return userr;
      }
      return user;
    });
    setUsers(newUsers);
  };

  return (
    <UsersContext.Provider
      value={{ users, deleteUser, updateUser, isAuth, setIsAuth, getUserById }}
    >
      {children}
    </UsersContext.Provider>
  );
};
