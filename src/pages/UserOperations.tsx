import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { profileIcon, pencilIcon, trashIcon } from '../assets';
import Badge from '../components/Badge';
import { UsersContext } from '../context/usersContext';

import type { User } from '../types/User';

type Props = {};

const UserOperations = (props: Props) => {
  const { users, deleteUser } = useContext(UsersContext);

  const handleDelete = (id: number) => {
    if (window.confirm('Silmek istediğinize emin misiniz?')) {
      deleteUser(id);
    }

    return;
  };

  return (
    <div className='w-full h-full flex justify-center items-center p-5 pr-10  bg-white rounded-xl'>
      <div className='w-full h-full max-h-[70vh] flex justify-center items-start bg-white rounded-xl   overflow-y-scroll pr-10 '>
        <table className='w-full text-sm text-left text-gray-500    '>
          <thead className='text-xs  uppercase border-b text-black font-bold text-center '>
            <tr>
              <th scope='col' className=' py-3  pr-10'>
                #
              </th>
              <th scope='col' className=' py-3 text-left'>
                Ad-Soyad
              </th>
              <th scope='col' className=' py-3 text-left'>
                E-mail
              </th>
              <th scope='col' className=' py-3'>
                Telefon
              </th>
              <th scope='col' className=' py-3'>
                Durum
              </th>
              <th scope='col' className=' py-3'>
                İşlem
              </th>
            </tr>
          </thead>
          <tbody className=''>
            {users.map((user: User, index: number) => (
              <tr className='bg-white border-b text-center '>
                <td className=' py-4 pr-10'>{index + 1}</td>
                <td
                  scope='row'
                  className=' py-4 font-medium text-gray-900 whitespace-nowrap flex  justify-start items-center  gap-5 '
                >
                  <img src={profileIcon} alt='' />
                  <h1>{user.name}</h1>
                </td>
                <td className=' py-4 text-left'>{user.email}</td>
                <td className=' py-4'>{user.phone}</td>
                <td className=' py-4'>
                  <Badge type={user.status} />
                </td>
                <td className=' py-4 '>
                  <div className='flex justify-center flex-row items-center gap-5'>
                    <Link
                      to={`/users/${user.id}`}
                      className='font-medium text-blue-600  hover:underline'
                    >
                      <img src={pencilIcon} alt='' />
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className='font-medium text-blue-600  hover:underline'
                    >
                      <img src={trashIcon} alt='' />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOperations;
