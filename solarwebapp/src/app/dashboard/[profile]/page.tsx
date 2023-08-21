import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import '../../globals.css';
import Image from 'next/image';
import {AiFillStar} from 'react-icons/ai';




function dashboardPage({params}: any) {
    const user = params.profile;

    const buttonStyle = 'flex-center bg-lightblue rounded-md p-2';

    const userInfo = {
        'personal':'Jessica Jones',
        'payment':'NatWest 00-00-00',
        'verification':'passport',
        'loan':'GB*UBI*E123456|Type2',
        'ev':'Audi A3 sportsback S Line',
        'solarcredit':'10|£0.10',
        'leaderboard':'Rank#123'
    }

    const solar = ['solar credits', 'leaderboard'];

    return (
        <div className='py-8 px-8 bg-lightgrey flex-col'>
            <h1 className='font-bold text-lg mt-4'>Profile</h1>
        {/**header  */}
            <div className='flex-col justify-start py-4'>
                <div className='rounded-full flex items-center justify-start'>
                    <Image
                    src='/images/rabbit.png'
                    width={32}
                    height={32}
                    alt='rabbit avatar'
                    className='mr-2'/>
                    <div>
                        <div className='flex justify-start item-center'>
                            <p className='capitalize font-bold'>{user}</p>
                            <p className='text-darkgrey text-xs flex-center ml-2'> <AiFillStar/> 5.0</p>
                        </div>
                        <p>View profile</p>
                    </div>
                </div>
                <h2 className='py-2'>Account settings</h2>
                <div className='p-4 rounded-lg bg-white capitalize'>
                    <p className='text-darkgrey'>personal information</p>
                    <p className='text-darkblue'>{userInfo.personal}</p>
                    <p className='text-darkgrey'>payment methods</p>
                    <p className='text-darkblue'>{userInfo.payment}</p>
                    <p className='text-darkgrey'>verification</p>
                    <p className='text-darkblue'>{userInfo.verification}</p>
                    <p className='text-darkgrey'>loan your home charger</p>
                    <p className='text-darkblue'>{userInfo.loan}</p>
                    <p className='text-darkgrey'>your EV</p>
                    <p className='text-darkblue'>{userInfo.ev}</p>
                </div>
                <h2 className='py-2'>Solar syncing</h2>
                <div className='p-4 capitalize rounded-lg bg-white'>
                    <p className='text-darkgrey'>solar credits</p>
                    <p className='text-darkblue'>{userInfo.solarcredit}</p>
                    <p className='text-darkgrey'>leaderboard</p>
                    <p className='text-darkblue'>{userInfo.leaderboard}</p>
                </div>
            </div>
                <Navbar activePage='profile'/>
        </div>
    )
}

export default dashboardPage;