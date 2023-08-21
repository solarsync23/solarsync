import React from 'react';
import {FaBell} from 'react-icons/fa';
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import '../../globals.css';


function dashboardPage({params}: any) {
    const user = params.profile;

    const quickActions = [
        {
            'text':'Saved chargers',
            'src':'/images/save.png',
            'alt':'charger'
        },
        {
            'text':'Rent your spot',
            'src':'/images/rent.png',
            'alt':'blue car charging'
        },
        {
            'text':'Your bookings',
            'src':'/images/book.png',
            'alt':'parked car'
        }
    ];

    return (
        <div className='bg-white'>
            {/* header  */}
            <div className='flex justify-between m-2'>
                <h1 className='text-black'>Good morning, {user}</h1>
                <div className='flex'>
                    <FaBell size='1.5rem' className='text-black'/>
                    <div className='rounded-full bg-lightgrey w-8 h-8'>
                </div>
                </div>
            </div>
            <div className='text-black h-96'> map </div>
            {/**Quick actions */}
            <div className='flex justify-between'>
                {
                    quickActions.map((action,i)=>{
                        return (
                            <button key={i}
                            style={{backgroundImage: `url('${action.src}')`}}
                            className='text-white bg-cover bg-center rounded-xl h-32 w-24 flex justify-end items-end'
                            >
                                {action.text}
                            </button>
                        )
                    })
                }
            </div>

            <Navbar/>

        </div>
    )
}

export default dashboardPage;