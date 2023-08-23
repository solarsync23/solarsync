import React from 'react';
import LeaderBox from '@/components/LeaderBox/LeaderBox';
import {AiOutlineMenu} from 'react-icons/ai';
import Header from '@/components/Header/Header';


function leaderPage() {
    const leaders = [
        {
            'name':'Jay',
            'status':'Solar Star',
            'rank':1,
            'score':500,
            'img':'/avatar/1.png'
        },
        {
            'name':'Ellie',
            'status':'Super Syncer',
            'rank':2,
            'score':489,
            'img':'/avatar/7.png'
        },
        {
            'name':'Adam K',
            'status':'Solar Star',
            'rank':3,
            'score':456,
            'img':'/avatar/4.png'
        },
        {
            'name':'Damien',
            'status':'Solar Saint',
            'rank':4,
            'score':389,
            'img':'/avatar/2.png'
        },
        {
            'name':'Tiffany',
            'status':'Solar Star',
            'rank':5,
            'score':345,
            'img':'/avatar/6.png'
        },
        {
            'name':'Sam M',
            'status':'Solar Star',
            'rank':6,
            'score':278,
            'img':'/avatar/3.png'
        },
        {
            'name':'Molly',
            'status':'Solar Saint',
            'rank':7,
            'score':254,
            'img':'/avatar/5.png'
        },
        {
            'name':'Evie',
            'status':'Super Syncer',
            'rank':8,
            'score':200,
            'img':'/avatar/8.png'
        },


    ]
    return (
        <div className='bg-lightgrey'>
            <Header
            title='leaderboard'
            href='/dashboard/profile'
            icon={ <AiOutlineMenu/>}
            />
            <div className='rounded-full py-2 px-6 mx-8 my-4 bg-white flex justify-between capitalize text-sm'>
                <button className='capitalize rounded-full py-2 px-4 bg-darkblue text-white'>all time</button>
                <button className='capitalize'>this month</button>
                <button className='capitalize'>this week</button>
            </div>
            <div className='bg-white p-4'>
            {
                leaders.map((leader,i)=>{
                    return (
                        <LeaderBox userLeader={leader}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default leaderPage;