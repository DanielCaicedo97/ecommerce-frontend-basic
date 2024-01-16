import React from 'react';
import { Link } from 'react-router-dom';
import LoginImage from '../assets/login-image.png';
import LoginBackground from '../assets/login-background.png';

const Login = () => {
  return (
    <div className='flex w-full'>
      <div className='flex flex-col justify-center items-center lg:w-2/4 mr-10 md:flex-row '>
        <img src={LoginBackground} alt="login image" className='relative w-0 md:w-1/2 lg:w-0 sm:w-0' />
        <div>
          <h1 className='font-bold text-6xl uppercase text-center md:w-2/3 mx-auto'>
            Log in and enjoy the <span className='text-sky-700'>products</span>
          </h1>
          <form className='p-4 mx-auto w-96 sm:px-9 mt-8 shadow-md'>
            <div className='mb-5'>
              <label htmlFor="email" className='font-medium'>Email</label>
              <input type="email" id="email" className='block placeholder-slate-400 p-2 w-full bg-slate-100' placeholder='e.g., email@email.com' />
            </div>
            <div className='mb-5'>
              <label htmlFor="password" className='font-medium'>Password</label>
              <input type="password" id="password" className='block placeholder-slate-400 p-2 w-full bg-slate-100' placeholder='*********' />
            </div>
            <input type="submit" value="Log In" className='uppercase bg-sky-700 text-white p-2 rounded-md w-full' />
            <div className='flex justify-between px-4 mt-5 text-slate-500 '>
              <Link to="/register" className=''>Don't have an account.</Link>
              <Link to="/forgot-password">Forgot my password.</Link>
            </div>
          </form>
        </div>
      </div>
      <div className='h-full w-0 bg-sky-500 lg:w-full'>
        <img src={LoginImage} alt="login image" className='h-full w-screen' />
      </div>
    </div>
  );
};

export default Login;
