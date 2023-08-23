import React from 'react';
import Image from 'next/image';

type UserLeader = {
    name: string;
    status: string;
    rank: number;
    score: number;
    img: any;
}

interface LeaderProp {
    userLeader: UserLeader;
}

const LeaderBox: React.FC<LeaderProp> =({userLeader}) => {


    return (
        <div className='bg-white flex justify-start border-b border-lightgrey border-solid p-2 text-darkblue'>
                <div className='flex items-center justify-start '>
                    <Image
                    src={userLeader.img}
                    width={38}
                    height={38}
                    alt='avatar'
                    className='mr-2 rounded-full'/>
                </div>
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