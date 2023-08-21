import React from 'react';
import {FaBell} from 'react-icons/fa';
import Navbar from '@/components/Navbar/Navbar';
import '../../globals.css';
import {AiOutlineHeart, AiOutlineClockCircle,AiOutlineMenu } from 'react-icons/ai';
import {TbSunLow} from 'react-icons/tb';
import {HiMagnifyingGlass} from 'react-icons/hi2';


function dashboardPage({params}: any) {
    const user = params.profile;

    const buttonStyle = 'flex-center bg-lightblue rounded-md p-2'

    return (
        <div className='py-2 px-4 bg-lightgrey'>
            {/* header  */}
            <div className='flex justify-between p-2'>
                <h1 className='text-black'>Good morning, {user}</h1>
                <div className='flex'>
                    <FaBell size='1.5rem' className='text-black'/>
                    <div className='rounded-full w-8 h-8'>
                </div>
                </div>
            </div>
            {/**Search bar */}
            <form 
            className='rounded-full bg-white p-2 flex justify-around mb-2'
            >
                <HiMagnifyingGlass size='1.5rem' className='text-lightgrey'/>
                <input placeholder='search location or station'/>
                <div className='rounded-full w-8 h-8 bg-darkblue text-white flex-center'>
                    <AiOutlineMenu/>
                </div>
            </form>
            {/**Quick actions */}
            <div className='flex justify-between'>
                <button
                className={buttonStyle}
                > 
                    <AiOutlineHeart className='mr-2'/>
                    Saved
                </button>
                <button
                className={buttonStyle}
                > 
                    <AiOutlineClockCircle className='mr-2'/>
                    Recent
                </button>
                <button
                className={buttonStyle}
                > 
                    <TbSunLow className='mr-2'/>
                    Solar
                </button>
            </div>
            <div className='text-black h-96'> map </div>
            <div className='w-full flex-center flex-col'>
                <button className='button-pill text-white w-48'>List View</button>
            </div>
                <Navbar/>

        </div>
    )
}

export default dashboardPage;