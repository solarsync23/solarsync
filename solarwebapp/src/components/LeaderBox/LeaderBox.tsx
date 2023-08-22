import React from 'react';

type UserLeader = {
    name: string;
    status: string;
    rank: number;
    score: number;
}

interface LeaderProp {
    userLeader: UserLeader;
}

const LeaderBox: React.FC<LeaderProp> =({userLeader}) => {
    return (
        <div className='bg-white flex justify-start border-b border-lightgrey border-solid p-2'>
            <div className='rounded-full w-8 h-8 bg-lightgrey mr-2 flex-center'></div>
            <div className='w-full mx-2 flex justify-between'>
                <div>
                    <p>{userLeader.name}</p>
                    <p className='text-darkgrey'>{userLeader.status}</p>
                </div>
                <div>
                    <p>#{userLeader.rank}</p>
                    <p className='text-darkgrey'>{userLeader.score}</p>
                </div>
            </div>
        </div>
    )
}

export default LeaderBox