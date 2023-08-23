import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import {AiOutlineHeart, AiOutlineClockCircle } from 'react-icons/ai';
import {TbSunLow} from 'react-icons/tb';
import SearchBar from '@/components/SearchBar/SearchBar';
import Image from 'next/image';


function mapPage() {

    const buttonStyle = 'flex-center bg-lightblue rounded-md p-2';

    return (
        <div className='py-2 px-4 h-screen bg-lightgrey'>
        {/**Search bar */}
        <div className='mt-4'>
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

        </div>
        <div className='flex-center w-full'>
            <Image
            src='/images/map.png'
            width={350}
            height={200}
            alt='map'
            />
        </div>
        <div className='w-full flex-center flex-col'>
            <button className='button-pill text-white w-48 border-none'>List View</button>
        </div>
            <Navbar activePage='map'/>
    </div>
    )
}

export default mapPage;