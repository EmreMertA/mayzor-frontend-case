import React, { useState } from 'react';
import logo from '../assets/mayzor-logo.png';

type Props = {};

const Login: React.FC<Props> = () => {
  const [email, setEmail] = useState<string>();
  const admin = 'emre@mayzor.net';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === admin) {
      alert('Hosgeldiniz');
    } else {
      alert('Hatali giris');
    }
  };

  return (
    <div className='bg-mayzor w-screen h-screen flex justify-center items-center flex-col '>
      <div className=' bg-white w-60 justify-center items-center flex p-4 rounded-t-3xl'>
        <img src={logo} alt='logo' className='w-48' />
      </div>
      <div className='login-card flex justify-center items-center flex-col p-10 space-y-5'>
        <h1 className='absolute top-10 text-2xl font-bold text-[#516BC7]'>
          SIGN IN
        </h1>

        <form
          action=''
          className='flex flex-col items-start space-y-3  w-full text-[#4C5F82] '
          onSubmit={handleSubmit}
        >
          <div className='w-full'>
            <label htmlFor='mail' className='text-sm'>
              E mail Address
            </label>
            <input
              type='text'
              id='mail'
              name='mail'
              className='w-full p-3 rounded-md bg-white text-xs'
              placeholder='emre@mayzor.net'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='flex justify-center items-center space-x-2 text-xs'>
            <input type='checkbox' id='checkbox' name='checkbox' />
            <label htmlFor='checkbox' className='font-bold'>
              Remember me
            </label>
          </div>
          <button
            type='submit'
            className='w-full bg-[#516BC7] text-white h-10 rounded-md hover:bg-[#4C5F82] duration-300'
          >
            Log In
          </button>
        </form>

        <a href='#' className='text-[#4C5F82] text-xs'>
          Forgot your password?
        </a>
        <a href='#' className='flex flex-row text-[#4C5F82]  text-xs'>
          Don't have an account? <p className='font-bold'>Sign Up</p>
        </a>
      </div>
    </div>
  );
};

export default Login;
