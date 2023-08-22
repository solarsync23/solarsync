import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import '../../globals.css';
import Image from 'next/image';
import {AiFillStar} from 'react-icons/ai';
import InfoBox from '@/components/InfoBox/InfoBox';



function dashboardPage({params}: any) {
    const user = params.profile;

    const buttonStyle = 'flex-center bg-lightblue rounded-md p-2';

    const userInfo = {
        'personal':'Jessica Jones',
        'payment':'NatWest 00-00-00',
        'verification':'passport',
        'loan':'GB*UBI*E123456|Type2',
        'ev':'Audi A3 sportsback S Line',
        'solarcredit':'100',
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
                            <p className='capitalize font-bold'>Jessica</p>
                            <p className='text-darkgrey text-xs flex-center ml-2'> <AiFillStar/> 5.0</p>
                        </div>
                        <p>View profile</p>
                    </div>
                </div>
                <h2 className='py-2'>Solar syncing</h2>
                <div className='p-4 rounded-lg bg-white'>
                    <InfoBox section='solar credits' content={userInfo.solarcredit} href=''/>
                    <InfoBox section='leaderboard' content={userInfo.leaderboard} href='/leaderboard'/>
                </div>
                <h2 className='py-2'>Account settings</h2>
                <div className='p-4 rounded-lg bg-white capitalize'>
                <InfoBox section='personal information' content={userInfo.personal} href='/leaderboard'/>
                <InfoBox section='payment methods' content={userInfo.payment} href='/leaderboard'/>
                <InfoBox section='leaderboard' content={userInfo.leaderboard} href='/leaderboard'/>
                <InfoBox section='verification' content={userInfo.verification} href='/leaderboard'/>
                <InfoBox section='loan your home charger' content={userInfo.loan} href='/leaderboard'/>
                <InfoBox section='your EV' content={userInfo.ev} href='/leaderboard'/>
                </div>
            </div>
                <Navbar activePage='profile'/>
        </div>
    )
}

export default dashboardPage;