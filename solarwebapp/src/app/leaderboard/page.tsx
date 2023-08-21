import React from 'react';
import LeaderBox from '@/components/LeaderBox/LeaderBox';
import {AiOutlineMenu} from 'react-icons/ai';
import {BsArrowLeft} from 'react-icons/bs';

function leaderPage() {
    const leaders = [
        {
            'name':'Jay',
            'status':'Solar Star',
            'rank':2,
            'score':500
        },
        {
            'name':'Jay',
            'status':'Solar Star',
            'rank':3,
            'score':500
        },
        {
            'name':'Jay',
            'status':'Solar Star',
            'rank':4,
            'score':500
        },
        {
            'name':'Jay',
            'status':'Solar Star',
            'rank':5,
            'score':500
        },


    ]
    return (
        <div className='bg-lightgrey'>
            {/** header */}
            <div className='p-4 flex justify-between items-center'>
                <BsArrowLeft/>
                <h1 className='text-center'>LeaderBoard</h1>
                <AiOutlineMenu/>
            </div>
            <div className='rounded-full py-2 px-6 mx-8 my-4 bg-white flex justify-between capitalize'>
                <button className='capitalize'>all time</button>
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