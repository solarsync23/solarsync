import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import {AiOutlineHeart, AiOutlineClockCircle } from 'react-icons/ai';
import {TbSunLow} from 'react-icons/tb';
import SearchBar from '@/components/SearchBar/SearchBar';


function mapPage() {

    const buttonStyle = 'flex-center bg-lightblue rounded-md p-2';
    const address = '1600 Amphitheatre Parkway, Mountain View, CA'

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
        {/*map*/}

        <div className='w-full flex-center flex-col'>
            <button className='button-pill text-white w-48 border-none'>List View</button>
        </div>
            <Navbar activePage='map'/>
    </div>
    )
}

export default mapPage;