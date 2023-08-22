"use client"
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../../utils/firebase';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../../components/Logo/Logo';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const auth = getAuth();

    
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        // router.push('/preferences');
        toast.success("Logged in successfully");
    }).catch((error) => {
        const errorMessage = "Invalid email/password";
        toast.error(errorMessage);
    });
    
};



  return (
    <div className='h-screen flex flex-col justify-around items-center bg-darkblue'>
      <Logo/>
      <div className="w-full flex justify-center items-center bg-gradient-to-b from-indigo-950 to-indigo-900">
        <div className="w-full max-w-md">
          <form onSubmit={handleLogin}
          className='flex-center flex-col p-4'
          >
              <input
              placeholder='Email Address'
                type="email"
                id="email"
                className="input-field w-full focus:outline-none focus:ring focus:border-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
              placeholder='password'
                type="password"
                id="password"
                className="w-full input-field focus:outline-none focus:ring focus:border-blue-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="text-white w-full text-center m-2 hover:text-white"
                onClick={() =>router.push("/reset")}
              >
                Forgotten password?
              </button>
            <div className="w-full flex-col justify-center items-center mt-4">
              <button type="submit" className="button-pill text-white">
                Log In
              </button>
              <button className='button-pill text-white'>Register</button>
            </div>
            <Link href='/map' className='w-full text-center m-2 text-white'>Continue as guest</Link>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;