import React from 'react';

type Props = {};

const UserOperations = (props: Props) => {
  return (
    <div className='w-full h-full flex justify-center items-start bg-white rounded-xl p-10'>
      <table className='w-full text-sm text-left text-gray-500 '>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400 text-center'>
          <tr>
            <th scope='col' className=' py-3'>
              #
            </th>
            <th scope='col' className=' py-3'>
              Ad-Soyad
            </th>
            <th scope='col' className=' py-3'>
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
        <tbody>
          <tr className='bg-white border-b text-center '>
            <td className=' py-4'>#</td>
            <th
              scope='row'
              className=' py-4 font-medium text-gray-900 whitespace-nowrap'
            >
              Emre Mert Akdağ
            </th>
            <td className=' py-4'>emremakdag55@gmail.com</td>
            <td className=' py-4'>0543 502 97 85</td>
            <td className=' py-4'>Aktif</td>
            <td className=' py-4'>
              <a
                href='#'
                className='font-medium text-blue-600  hover:underline'
              >
                sil
              </a>
              <a
                href='#'
                className='font-medium text-blue-600  hover:underline'
              >
                düzenle
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserOperations;
