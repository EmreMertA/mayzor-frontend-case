import React, { useState, useEffect, useContext } from 'react';
import {
  arrowIcon,
  calendarIcon,
  changeProfileIcon,
  profileIcon2,
  trashIcon,
} from '../assets';
import { useLocation, useNavigate } from 'react-router-dom';
import { UsersContext } from '../context/usersContext';

type Props = {};

const Profile = (props: Props) => {
  const { getUserById, updateUser, deleteUser } = useContext(UsersContext);

  const location = useLocation();
  const id = parseInt(location.pathname.split('/')[2]);
  const user = getUserById(id);
  const navigate = useNavigate();

  const [form, setForm] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    status?: string;
  }>({
    name: user?.name,
    phone: user?.phone,
    email: user?.email,
    status: user?.status,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    updateUser(id, form);
    alert('Güncellendi');
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Silmek istediğinize emin misiniz?')) {
      deleteUser(id);
      navigate(-1);
      alert('Silindi');
    }

    return;
  };

  return (
    <div className='w-full h-full flex   flex-col bg-white rounded-xl p-7 relative  '>
      <div className='flex flex-row space-x-5  font-bold'>
        <button onClick={() => navigate(-1)}>
          <img src={arrowIcon} alt='' className='rotate-90 w-5' />
        </button>
        <h1>Kullanıcı_{form.name}</h1>
      </div>

      <div className='flex flex-row py-16 space-x-5 '>
        <div className='relative'>
          <img src={profileIcon2} className='w-42 h-42' alt='' />
          <img src={changeProfileIcon} alt='' className='bottom-44 right-1 absolute w-18 h-18' />
        </div>
        <div className='flex flex-col space-y-2 '>
          <label className='text-[#4C5F82] ml-2' htmlFor='name'>
            Adı-Soyadı
          </label>
          <input
            onChange={handleChange}
            value={form.name}
            name='name'
            id='name'
            className='bg-[#FCFCFC] border border-[#E1EDFF] rounded-full w-64 h-10 pl-5 focus:outline-none text-[#8F9BAE]'
            type='text'
          />
          <label className='text-[#4C5F82] ml-2' htmlFor='phone'>
            Telefon
          </label>
          <input
            onChange={handleChange}
            value={form.phone}
            name='phone'
            id='phone'
            className='b g-[#FCFCFC] border border-[#E1EDFF] rounded-full w-64 h-10 pl-5 focus:outline-none text-[#8F9BAE]'
            type='text'
          />
          <label className='text-[#4C5F82] ml-2' htmlFor='email'>
            E-posta
          </label>
          <input
            onChange={handleChange}
            value={form.email}
            name='email'
            id='email'
            className='b g-[#FCFCFC] border border-[#E1EDFF] rounded-full w-64 h-10 pl-5 focus:outline-none text-[#8F9BAE]'
            type='text'
          />
          <label className='text-[#4C5F82] ml-2' htmlFor='email'>
            Doğum Tarihi
          </label>
          <div className=' justify-center relative'>
            <input
              value='gg.aa.yyyy'
              className='b g-[#FCFCFC] border border-[#E1EDFF] rounded-full w-64 h-10 pl-5 focus:outline-none text-[#8F9BAE] '
              type='text'
            />
            <img
              src={calendarIcon}
              alt=''
              className='absolute right-3 top-3 w-5 h-5'
            />
          </div>
        </div>
      </div>
      <div className='absolute bottom-5 left-0 right-0 flex justify-center space-x-4'>
        <button
          onClick={() => handleDelete(id)}
          className='flex flex-row justify-center items-center space-x-2 text-[#E41761] bg-[#FCE8EF] px-4 py-3 rounded-full'
        >
          <img src={trashIcon} alt='' className='' />
          <h1>Hesabı Sil</h1>
        </button>
        <button
          onClick={() => handleUpdate()}
          className='flex flex-row justify-center items-center space-x-2 text-white bg-[#3B82F6] px-4 py-3 rounded-full'
        >
          <h1>Hesabı Güncelle</h1>
        </button>
      </div>
    </div>
  );
};

export default Profile;
