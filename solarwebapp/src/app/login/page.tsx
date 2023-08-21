"use client"
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import '../../utils/firebase';
import { useRouter } from 'next/navigation';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  const auth = getAuth();

    
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
        router.push('/preferences');
        console.log(user);

    }).catch((error) => {
        const errorMessage = "Invalid email/password";
        console.log(errorMessage);
    });
    
};



  return (
    <div className='h-screen flex flex-col justify-around items-center bg-darkblue text-white'>
      <Logo/>
      <div className="w-full flex justify-center items-center bg-gradient-to-b from-indigo-950 to-indigo-900">
        <div className="w-full max-w-md">
          <h2 className="text-peach text-2xl text-center font-bold mb-4">Log In</h2>
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
                Forgot Password?
              </button>
            <div className="w-full flex-col justify-center items-center mt-4">
              <button type="submit" className="button-pill">
                Log In
              </button>
              <button className='button-pill'>Register</button>
            </div>
            <button className='w-full text-center m-2'>Continue as guest</button>
          </form>
    
        </div>
      </div>
    </div>
  );
};

export default LoginPage;