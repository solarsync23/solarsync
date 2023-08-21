import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import {AiOutlineHeart, AiOutlineClockCircle } from 'react-icons/ai';
import {TbSunLow} from 'react-icons/tb';
import SearchBar from '@/components/SearchBar/SearchBar';

function mapPage() {

    const buttonStyle = 'flex-center bg-lightblue rounded-md p-2'

    return (
        <div className='py-2 px-4 bg-lightgrey h-screen'>
        {/**Search bar */}
        <SearchBar/>
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
            <button className='button-pill text-white w-48 border-none'>List View</button>
        </div>
            <Navbar/>
    </div>
    )
}

export default mapPage;