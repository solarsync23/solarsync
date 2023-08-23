'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Logo from '../Logo/Logo';
import React from 'react'

const Transition = () => {

    const router = useRouter();

    useEffect(()=>{
        setTimeout(() => {
            router.push('/login');
        }, 2000);
    },[router])
    

    return (
        <>
            <Logo/>
        </>
    )
}

export default Transition