"use client"
import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import '/src/utils/firebase.js';
import Logo from '@/components/Logo/Logo';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();
  const handleResetPassword = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const auth = getAuth();
    
    sendPasswordResetEmail(auth, email).then(() => {
        alert('Password reset email sent successfully!');
        router.push('/login');
    }).catch((error) => {
        //Placeholder message before auth is set up
        const errorMessage = "Password reset email sent successfully!"; 
        alert(errorMessage)
    });
    
  };

  return (
    <div className='h-screen flex flex-col justify-around items-center bg-darkblue'>
      <Logo/>
      <div className="w-full flex justify-center items-center bg-gradient-to-b from-indigo-950 to-indigo-900">
        <div className="w-full max-w-md">
          <form onSubmit={handleResetPassword} className='flex-center flex-col p-4'>
            <input
              placeholder='Email Address'
              type="email"
              id="email"
              className="input-field w-full focus:outline-none focus:ring focus:border-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="button-pill text-white mt-4">
              Reset Password
            </button>
            <button
              type="button"
              className="text-white w-full text-center m-2 hover:text-white"
              onClick={() =>router.push("/login")}
            >
              Back to Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
